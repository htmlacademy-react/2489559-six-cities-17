import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/use-map';
import classNames from 'classnames';
import { MAP_MARKER_CURRENT, MAP_MARKER_DEFAULT } from '../../constants/constants';
import { City } from '../../types/city/city-type';
import { Offers } from '../../types/types-offers';
import { OfferPageType } from '../../constants/constants';
import { Offer } from '../../types/types-offer';


type MapProps = {
  city: City;
  offers: Offers[] | null;
  selectedOffer?: Offers | null;
  mapType?: OfferPageType;
  offerOpened?: Offer;
};

const defaultMapPin = new Icon({
  iconUrl: MAP_MARKER_DEFAULT,
  iconSize: [30, 40],
  iconAnchor: [30, 40]
});

const currentMapPin = new Icon({
  iconUrl: MAP_MARKER_CURRENT,
  iconSize: [30, 40],
  iconAnchor: [30, 40]
});

function Map(props: MapProps): JSX.Element {
  const { city, offers, selectedOffer, offerOpened, mapType = 'cities' } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers?.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker.setIcon(
          selectedOffer && offer.id === selectedOffer.id
            ? currentMapPin
            : defaultMapPin
        ).addTo(markerLayer);
      });

      if (offerOpened) {
        const marker = new Marker({
          lat: offerOpened.location.latitude,
          lng: offerOpened.location.longitude
        });
        marker.setIcon(currentMapPin).addTo(markerLayer);
      }

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer, offerOpened]);

  return (
    <section className={classNames(
      'map',
      { 'cities__map': mapType === OfferPageType.CITIES },
      { 'offer__map': mapType === OfferPageType.NEAR_PLACES })}
    ref={mapRef}
    >
    </section >
  );
}

export default Map;

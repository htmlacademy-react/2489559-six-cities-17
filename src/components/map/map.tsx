import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../hooks/use-map';
import classNames from 'classnames';
import { MAP_MARKER_CURRENT, MAP_MARKER_DEFAULT } from '../../constants/constants';
import { City } from '../../types/city/city-type';
import { Offers } from '../../types/types-offers';
import { offerPageType } from '../../constants/constants';


type MapProps = {
  city: City;
  offers: Offers[];
  selectedOffer?: Offers | null;
  mapType?: offerPageType;
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
  const { city, offers, selectedOffer, mapType = offerPageType.CITIES } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      offers.forEach((offer) => {
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

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOffer]);

  return (
    <section className={classNames(
      'map',
      { 'cities__map': mapType === offerPageType.CITIES },
      { 'offer__map': mapType === offerPageType.NEAR_PLACES })}
    ref={mapRef}
    >
    </section >
  );
}

export default Map;

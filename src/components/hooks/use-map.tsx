import { useEffect, useState, MutableRefObject, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';
import { City } from '../../types/city/city-type';

function useMap(mapRef: MutableRefObject<HTMLElement | null>, city: City): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    if (map) {
      map.setView({ lat: city.location.latitude, lng: city.location.longitude }, city.location.zoom);
    }
  }, [city, map]);

  useEffect(() => {
    if (mapRef.current !== null && !isRendered.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude
        },
        zoom: city.location.zoom,
      });
      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRendered.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;

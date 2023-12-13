import { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

const MapComponent = () => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1Ijoia2VzaGF2LTAwNyIsImEiOiJjbG15ejZzYXkxMDc1MmpuejNhNWpscHNlIn0.xMnbyHLk061sQlJiR-oxMA';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // Default center coordinates
      zoom: 9, // Default zoom level
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        map.setCenter([longitude, latitude]); 

        new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map);
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );

    return () => {
      map.remove();
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '600px' }} />;
};

export default MapComponent;

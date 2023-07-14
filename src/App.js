import './App.css';
import { Grid, GridItem } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
} from 'react-leaflet';
import Header from './components/sections/Header';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import CompanyIcon from './components/sections/CompanyIcon';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;


function App() {

  return (
    <Grid
      templateAreas={`"header header"
                      "nav main"
                      "footer footer"`}
      gridTemplateRows={'50px 1fr 100px'}
      gridTemplateColumns={'400px 1fr'}
      h='100vh'
      color='blackAlpha.700'
      fontWeight='bold'
      w='100%'
    >
      <GridItem pl='2' bg='orange.300' area={'header'}>
        <Header/>
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'} display={'block'}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <MarkerClusterGroup>
            <CompanyIcon position={[51.50, -0.09]} name="Tom" logo="https://media.licdn.com/dms/image/C4D0BAQH_8EeBtcKa_Q/company-logo_200_200/0/1610357358307?e=2147483647&v=beta&t=qUtqbSE4ak_AinA5q99j-1UNFThA32RBE269L_s7o1k">
            </CompanyIcon>
          </MarkerClusterGroup>
        </MapContainer>
      </GridItem>
      <GridItem pl='2' bg='blue.300' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );

}

export default App;

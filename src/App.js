import './App.css';
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
} from 'react-leaflet';
import Header from './components/sections/Header';
import CompaniesMarkerGroup from './components/sections/CompaniesMarkerGroup';

function App() {
  const x = 1;
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
      <GridItem pl='2' area={'header'}>
        <Header/>
      </GridItem>
      <GridItem pl='2' area={'nav'}>
        <Heading>The UK Map of Gene Cell Therepy</Heading>
        <Text fontSize='sm'>The A-Z of gene cell therepy in the UK.</Text>
      </GridItem>
      <GridItem pl='2' area={'main'} display={'block'}>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          maxZoom={18}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url='https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'
          />
          <CompaniesMarkerGroup/>
        </MapContainer>
      </GridItem>
      <GridItem pl='2' area={'footer'}>
        Footer
      </GridItem>
    </Grid>
  );

}

export default App;

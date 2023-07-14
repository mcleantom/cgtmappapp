import L, {divIcon, icon} from 'leaflet';
import { renderToStaticMarkup} from 'react-dom/server';
import {
    Marker,
    Popup,
} from 'react-leaflet';
import {
    Image,
    Box,
    AspectRatio,
    Text,
} from '@chakra-ui/react';

export default function CompanyIcon({position, name, logo}) {
    const iconMarkup = renderToStaticMarkup(
        <Box backgroundColor={'black'} borderRadius={'10px'} padding={'10px'} height={'50px'} width={'50px'} zIndex={'sticky'}>
            <AspectRatio ratio={1} maxWidth={'50px'} maxHeight={'50px'} backgroundColor={'white'}>
                <Text>Hello</Text>
            </AspectRatio>
        </Box>
    );

    // const iconMarkup = renderToStaticMarkup(
    //     <div class="bottom-arrow" style={{background: 'blue', width: '50px', height: '50px', padding: '10px', borderRadius: '10px'}}>
    //         <img maxWidth="10px" height="10px" src={logo}/>
    //     </div>
    // );

    const customMarkerIcon = divIcon({
        className: '',
        iconSize: [50, 50],
        iconAnchor: [25, 50],
        popupAnchor: [1, -34],
        html: iconMarkup,
    });
    
    return (
        <Marker
        position={position}
        icon={customMarkerIcon}
        >
        <Popup>
            <h2>{name}</h2>
        </Popup>
        </Marker>
    );
}
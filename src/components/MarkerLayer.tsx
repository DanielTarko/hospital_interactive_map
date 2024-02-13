import { Icon, LatLngExpression } from 'leaflet';
import React from 'react'
import { Marker } from 'react-leaflet';
import { hospitals, hospital } from '../hospitals';

//less than 3 beds is green, critical access is blue, everything else is red
const healthIcon = new Icon ({
    iconUrl: 'https://img.icons8.com/doodle/48/heart-with-pulse.png',
    iconSize : [35,35], // size of the icon
    iconAnchor : [22,94], // point of the icon which will correspond to marker's location
})

interface MarkerLayerProps {
    selectedHospital: hospital;
    setHospital: React.Dispatch<React.SetStateAction<hospital>>;
}
  
const MarkerLayer = ({selectedHospital, setHospital} : MarkerLayerProps) => {
    return (
        <div>
            {
                hospitals.map((hos) => {
                    return <Marker 
                                position={hos.coordinates} 
                                icon={new Icon ({
                                    iconUrl: hos.isCriticalAccess ? 'https://danieltarko.github.io/hospital_interactive_map/red.png' : (hos.totalICUADC > 50 ? 'https://danieltarko.github.io/hospital_interactive_map/green.png' : 'https://danieltarko.github.io/hospital_interactive_map/blue.png' ),
                                    iconSize : selectedHospital.name === hos.name ? [45,45] : [35,35], // size of the icon
                                    iconAnchor : selectedHospital.name === hos.name ? [17,35] : [12,25], // point of the icon which will correspond to marker's location
                                })}
                                eventHandlers={{
                                    click: (e) => {
                                        setHospital(hos);
                                    },
                                }}
                            />
                })
            }
        </div>
        
    );
}
  
  export default MarkerLayer;

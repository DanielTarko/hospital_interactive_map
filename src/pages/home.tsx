import "leaflet/dist/leaflet.css";
import {MapContainer, TileLayer} from "react-leaflet"
import Tile from "../components/Tile";
import '../index.css';
import Shapefile from "../shapefile";
import MarkerLayer from "../components/MarkerLayer";
import { useState } from "react";
import { hospitals, hospital } from '../hospitals';
import Legend from "../components/Legend";

const Home = () => {
  const [selectedHospital, setSelectedHospital] = useState(hospitals[2]);
  const [selectedState, setSelectedState] = useState('Mississippi');

    return (
      <div className="m-auto">
        
        <div className="relative">
          <MapContainer center={[32, -85]} zoom={7}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Shapefile/>
          <MarkerLayer selectedHospital={selectedHospital} setHospital={setSelectedHospital}/>
          </MapContainer>
          <div className="absolute top-[3%] right-[1%] z-1000 bg-white h-[94%] w-1/4 rounded-lg overflow-scroll">
            <Tile selectedHospital={selectedHospital} setHospital={setSelectedHospital} selectedState={selectedState} setSelectedState={setSelectedState}/>
          </div>
          <div className="absolute bottom-8 left-8 z-1000 bg-white h-[26] w-[62] rounded-lg">
            <Legend/>
          </div>
        </div>
        
      </div>
      
     
  );
}

export default Home;


import { useEffect } from "react";
import PropTypes from "prop-types";
import { useMap } from "react-leaflet";
import L from "leaflet";
import shp from "shpjs";
import { AnyCnameRecord } from "dns";
import counties from "./cb_2018_28_cousub_500k"; 

const Shapefile = () => {
  const map = useMap();

  useEffect(() => {
    var UScounties = L.geoJSON(counties as GeoJSON.GeometryCollection).addTo(map);
  }, [map, counties]);

  return null;
};


export default Shapefile;

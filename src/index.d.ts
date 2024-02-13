declare module '*.jpg';
declare module '*.png';
declare module '*.webp';
declare module "./cb_2018_us_county_5m" {
    const counties: GeoJSON.GeometryCollection; // Replace 'any' with the actual type of the module if known
    export default counties;
  }
import React from 'react'
import Selector from './Selector';
import { hospitals, hospital } from '../hospitals';


let usStates: string[] = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California",
    "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
    "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
    "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
    "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
    "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
    "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

let hospitalNames: string[] = ["hospital 1 name", "hospital 2 name", "hospital 3 name"]

export interface Field {
    key: string;
    property: keyof hospital;
}


const demographicsFields: Field[] = [
    { key: "county", property: "county" },
    { key: "critical access vs rural hospital", property: "type" },
    { key: "total inpatient beds", property: "inpatientBeds" },
    { key: "total inpatient ADC", property: "inpatientADC" },
    { key: "ICU beds", property: "ICUBeds" },
    { key: "total ICU ADC", property: "totalICUADC" },
    { key: "Current contracted physician services", property: "physicianServices" },
];

const qualityFields: Field[] = [
    { key: "top 10 in-patient DRG's", property: "tenDRG" },
    { key: "length of stay", property: "stayLength" },
    { key: "Geometric LOS - GELOS (overall and per DRG)", property: "GELOS" },
    { key: "30-day readmission rate", property: "thrityDayReadmission" },
    { key: "top 10 readmission DRG", property: "tenReadmissionDRG" },
    { key: "overall mortality rate", property: "mortalityRate" },
    { key: "in-patient complication rate", property: "complicationRate" },
];

const costFields: Field[] = [
    { key: "cost per case", property: "costPerCase" },
    { key: "cost per top 10 diagnosis", property: "costPerTen" },
    { key: "ED tertiary transfer rate", property: "EDtransfer" },
    { key: "top 10 ED transfer DRG", property: "tenEDtransfer" },
    { key: "inpatient tertiary transfer rate", property: "inpersonTranser" },
    { key: "top 10 inpatient DRG inpatient transfer rate", property: "tenDRGTransferRate" },
];

interface TileProps {
    selectedHospital: hospital;
    selectedState: string;
    setHospital: React.Dispatch<React.SetStateAction<hospital>>;
    setSelectedState: React.Dispatch<React.SetStateAction<string>>;
  }
  
  const Tile = ({ selectedHospital, selectedState, setHospital, setSelectedState }: TileProps) => {
    return (
      <div className='p-8'>
        <Selector<string> options={usStates} value={selectedState} setValue={setSelectedState} />
        <Selector<hospital> options={hospitals} value={selectedHospital} setValue={setHospital} />
            <h4 className="pb-4 pt-2 text-lg font-medium">Hospital Demographics</h4>
            {
                demographicsFields.map((field, index) => (
                    <div>
                        <hr className="my-1"/>
                        <div className="flex justify-between">
                            <p className="font-medium text-base	">{field.key}</p>
                            <p className="text-right text-base	">{selectedHospital[field.property] as string | number}</p>
                        </div>
                    </div>
                  
                ))
            }

            <hr className="mt-2"/>
            <h4 className="pb-4 pt-2 text-lg font-medium">Hospital Quality</h4>
            {
                qualityFields.map((field, index) => (
                    <div>
                        <hr className="my-1"/>
                        <div className="flex justify-between">
                            <p className="font-medium text-base	">{field.key}</p>
                            <p className="text-right text-base	">{selectedHospital[field.property] as string | number}</p>
                        </div>
                    </div>
                ))
            }
            <hr className="mt-2"/>
            <h4 className="pb-4 pt-2 text-lg font-medium">Hospital Cost</h4>
            {
                costFields.map((field, index) => (
                    <div>
                        <hr className="my-1"/>
                        <div className="flex justify-between">
                            <p className="font-medium text-base	">{field.key}</p>
                            <p className="text-right text-base	">{selectedHospital[field.property] as string | number}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    );
}
  
  export default Tile;


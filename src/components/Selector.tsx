import React from 'react';
import { hospital, hospitals } from '../hospitals';

interface SelectorProps<T> {
  options: T[];
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}

const Selector = <T extends string | hospital>({ options, value, setValue }: SelectorProps<T>) => {

    type TType = T extends string ? string : hospital;


  return (
    <div className="relative inline-block w-full my-2">
      <select
        id="selectMenu"
        name="selectMenu"
        value={typeof value === "string" ? value : value.name}
        onChange={(e) => {
            if (hospitals.find(hospital => hospital.name === e.target.value)) {
                setValue(hospitals.find(hospital => hospital.name === e.target.value) as T)
            }
            else {
                setValue(e.target.value as T)
            }
        }}
        className="block appearance-none h-14 w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
      >
        {options.map((option, index) => (
          <option key={index} value={typeof option === "string" ? option : option.name}>
            {typeof option === "string" ? option : option.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10 12l-6-6 1.5-1.5L10 9l4.5-4.5L16 6l-6 6z" />
        </svg>
      </div>
    </div>
  );
};

export default Selector;

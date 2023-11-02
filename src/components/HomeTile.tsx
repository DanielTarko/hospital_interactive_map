import React from 'react'
import { Link } from "react-router-dom";
import whiteArrow from '../images/arrow.png';
import blackArrow from '../images/blackArrow.png';


interface HomeTileProps {
    textLeft: boolean,
    text: string,
    image: string,
    link: string,
  }

const HomeTile = ({textLeft, text, image, link,} : HomeTileProps) => {
    return (
        
        <div className='h-2/3 md:h-screen bg-slate-200 rounded-md m-5 md:m-0 md:bg-black grid grid-cols-1 md:grid-cols-2'>
            {!textLeft && (
                <div className="p-5 md:p-10 my-auto">
                    <img className='rounded-md' src={image} alt='arrow'></img>

                </div>
            )}
            <div className='m-auto p-20 hidden md:block'>
                <a href={link}>
                    <div className="flex h-40 transition ease-in-out hover:scale-105 duration-300">
                    <p className='text-black md:text-white font-mono text-xl my-auto'>{text}</p>
                    <img className='h-10 w-10 ml-5 my-auto hidden md:block' src={whiteArrow} alt='arrow'></img>
                    <img className='h-10 w-10 ml-5 my-auto md:hidden' src={blackArrow} alt='arrow'></img>
                    </div>
                    
                </a>
            </div>

            {textLeft && (
                <div className="p-10 my-auto">
                    <img className='rounded-md' src={image} alt={text}></img>
                </div>
            )}

            <div className='m-auto p-10  block md:hidden'>
                <a href={link}>
                    <div className="flex h-40 transition ease-in-out hover:scale-105 duration-300">
                    <p className='text-black md:text-white font-mono text-xl my-auto'>{text}</p>
                    <img className='h-10 w-10 ml-5 my-auto hidden md:block' src={whiteArrow} alt='arrow'></img>
                    <img className='h-10 w-10 ml-5 my-auto md:hidden' src={blackArrow} alt='arrow'></img>
                    </div>
                    
                </a>
            </div>
        </div>
    );
}
  
  export default HomeTile;


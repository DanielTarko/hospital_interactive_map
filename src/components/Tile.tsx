import React from 'react'

interface TileProps {
    textLeft: boolean,
    text1: string,
    text2: string,
    image: string,
  }

const Tile = ({textLeft, text1, text2, image,} : TileProps) => {
    return (
        <div className='h-2/3 md:h-screen rounded-md m-5 md:m-0 grid grid-cols-1 md:grid-cols-2'>
            {!textLeft && (
                <div className="p-10 my-auto">
                    <img className='rounded-md' src={image} alt={text1}></img>

                </div>
            )}
            
            <div className='m-auto hidden md:block p-20 '>
                <p className='text-white font-mono text-xl my-auto'>{text1}</p>
                <div className='h-5'></div>
                <p className='text-white font-mono text-xl my-auto'>{text2}</p>
            </div>

            {textLeft && (
                <div className="p-10 my-auto">
                    <img className='rounded-md' src={image} alt={text1}></img>

                </div>
            )}

            <div className='m-auto block md:hidden p-2'>
                <p className='text-white font-mono text-xl my-auto'>{text1}</p>
                <div className='h-5'></div>
                <p className='text-white font-mono text-xl my-auto'>{text2}</p>
            </div>
        </div>
    );
}
  
  export default Tile;


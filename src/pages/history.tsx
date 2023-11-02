import React from 'react';
import Header from '../components/Header'
import skyline from '../images/skyline.jpg';
import Tile from '../components/Tile'
import history from '../images/history.png';
import lot from '../images/72_big.jpg';
import cities from '../images/century_city_and_dt.jpg';
import downArrow from '../images/downArrow.png';

const ThingsToDo = () => {
  return (
    <div className='bg-black'>
      
      <div className='bg-[url("./images/losangeles_049_4059_up.jpg")] h-screen'>
        <Header />
        <h1 className='text-center m-5 md:m-20 font-mono	font-extralight	text-4xl	'>The History of Century City</h1>
        <img src={downArrow} alt="century city skyline" className='w-10 h-10 md:w-20 md:h-20 mx-auto mt-96 md:mt-[500px]'></img>
      </div>
       
      <Tile 
      textLeft={true}
      text1="Century City, a bustling business and residential district located in the heart of Los Angeles, has a fascinating history dating back to the mid-20th century."
      text2="Originally, the area that would become Century City was a 20th Century Fox movie studio backlot known as Fox Hills. In the early 1950s, a group of investors and visionaries, including Alcoa, purchased the land and initiated an ambitious project to transform the sprawling studio lot into a modern business and entertainment hub. The development was spearheaded by architect Welton Becket, and it quickly gained attention as one of the most significant urban planning projects of the era."
      image={history}
    />
    <Tile 
      textLeft={false}
      text1="The master plan for Century City was officially unveiled in 1957, and it aimed to create a futuristic, self-contained city within the city of Los Angeles."
      text2="This meticulously designed enclave boasted iconic skyscrapers, lush parks, and a network of wide boulevards, emphasizing accessibility and modernity. Over the years, it evolved into a hub for the entertainment industry, with numerous corporations and law firms choosing Century City as their home. By the 1970s, it had firmly established itself as a prestigious commercial and residential district, attracting businesses, luxury condominiums, and upscale shopping centers."
      image={lot}
    />
    <Tile 
      textLeft={true}
      text1="Today, Century City stands as a testament to urban renewal and the pursuit of modernity. It continues to thrive as a vital center for business, entertainment, and upscale living in Los Angeles, blending the nostalgia of its cinematic roots with the vibrancy of contemporary urban living."
      text2=" The history of Century City is a remarkable tale of transformation and innovation, and it remains an integral part of the city's landscape and culture."
      image={cities}
    />


      
      <div className='mt-20 h-20 md:h-96 bg-gradient-to-b from-black to-[#03459c]'>
      </div>
      <img src={skyline} alt="century city skyline"></img>

    </div>
  );
}

export default ThingsToDo;

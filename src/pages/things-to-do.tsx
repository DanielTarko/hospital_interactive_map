import React from 'react';
import Header from '../components/Header'
import skyline from '../images/skyline.jpg';
import Tile from '../components/Tile'
import westfield from '../images/westfieldOutside.jpg';
import annenberg from '../images/annenberg.jpg';
import park from '../images/park.jpg';
import downArrow from '../images/downArrow.png';

const ThingsToDo = () => {
  return (
    <div className='bg-black'>
     <div className='bg-[url("./images/losangeles_049_4059_up.jpg")] h-screen'>
        <Header />
        <h1 className='text-center m-5 md:m-20 font-mono	font-extralight	text-4xl	'>Things to do in Century City</h1>
        <img src={downArrow} alt="century city skyline" className='w-10 h-10 md:w-20 md:h-20 mx-auto mt-96 md:mt-[500px]'></img>
      </div>

      <Tile 
      textLeft={true}
      text1="One must-visit attraction in Century City is the iconic Westfield Century City Mall. This sprawling shopping and entertainment complex boasts a diverse range of shops, from high-end luxury boutiques to popular department stores."
      text2="It's a shopper's paradise, with numerous dining options, a movie theater, and even an Eataly marketplace. Whether you're looking for the latest fashion trends or just want to indulge in some delectable cuisine, the Westfield Century City Mall has something for everyone."
      image={westfield}
    />
    <Tile 
      textLeft={false}
      text1="For those seeking cultural enrichment, the Annenberg Space for Photography is a hidden gem within Century City. This unique museum showcases captivating photography exhibits, often exploring powerful social and environmental themes."
      text2=" It's a place where art and storytelling converge, offering a thought-provoking experience for art enthusiasts and photographers alike. The museum also hosts engaging events and workshops, making it a dynamic hub for creativity and expression."
      image={annenberg}
    />
    <Tile 
      textLeft={true}
      text1="Nature enthusiasts will find solace in the lush and serene Century Park, nestled within the bustling cityscape. This beautiful oasis features picturesque gardens, serene water features, and plenty of green space for relaxation and recreation."
      text2="Whether you want to have a leisurely picnic, take a peaceful stroll, or simply unwind in the heart of the city, Century Park provides a tranquil escape from the urban hustle and bustle. With its pristine landscaping and tranquil ambiance, it's a perfect spot to enjoy a moment of calm amidst the energy of Century City."
      image={park}
    />


      
      <div className='mt-20 h-20 md:h-96 bg-gradient-to-b from-black to-[#03459c]'>
      </div>
      <img src={skyline} alt="century city skyline"></img>

    </div>
  );
}

export default ThingsToDo;

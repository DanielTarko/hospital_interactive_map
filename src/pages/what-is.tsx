import React from 'react';
import Header from '../components/Header'
import skyline from '../images/skyline.jpg';
import Tile from '../components/Tile'
import towers from '../images/Century_City_Towers.jpg'
import CCBW from '../images/century_city_aerial_a_l.webp'
import moreTowers from '../images/Century_Plaza_Towers_670.jpg'
import downArrow from '../images/downArrow.png';

const ThingsToDo = () => {
  return (
    <div className='bg-black'>
      <div className='bg-[url("./images/losangeles_049_4059_up.jpg")] h-screen'>
        <Header />
        <h1 className='text-center m-5 md:m-20 font-mono	font-extralight	text-4xl	'>What is Century City</h1>
        <img src={downArrow} alt="century city skyline" className='w-10 h-10 md:w-20 md:h-20 mx-auto mt-96 md:mt-[500px]'></img>
      </div>
      <Tile
      textLeft={true}
      text1="Century City is a prominent business and residential district located in Los Angeles, California. This urban enclave is known for its modern and upscale infrastructure, comprising numerous high-rise buildings, luxury condominiums, and commercial developments."
      text2="It is situated on the west side of Los Angeles, adjacent to the affluent neighborhoods of Beverly Hills and Westwood, making it a prime location for businesses and residents seeking a convenient and prestigious address."
      image={moreTowers}
    />
    <Tile
      textLeft={false}
      text1="One of the defining features of Century City is its thriving business sector. It serves as a major hub for corporate offices, law firms, and entertainment companies. The district is home to iconic landmarks like the Century Plaza Towers and the Fox Plaza, which gained recognition through various films and television shows."
      text2="With its excellent transport links and proximity to major studios and entertainment industry players, Century City plays a significant role in the economic landscape of Los Angeles."
      image={CCBW}
    />
    <Tile
      textLeft={true}
      text1="In addition to its commercial significance, Century City offers a high quality of life for its residents. The area boasts a range of upscale dining options, shopping centers, and recreational facilities."
      text2='The Westfield Century City mall, for instance, is a popular shopping destination in the area. Moreover, its central location provides residents with convenient access to various cultural attractions, making Century City a well-rounded district where business and leisure coexist harmoniously.'
      image={towers}
    />
      
      <div className='mt-20 h-20 md:h-96 bg-gradient-to-b from-black to-[#03459c]'>
      </div>
      <img src={skyline} alt="century city skyline"></img>

    </div>
  );
}

export default ThingsToDo;

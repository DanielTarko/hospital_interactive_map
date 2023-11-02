
import Header from '../components/Header'
import skyline from '../images/skyline.jpg';
import BWSkyline from '../images/longAISkyline.png';
import HomeTile from '../components/HomeTile'
import historyImage from '../images/history.png';
import westfield from '../images/westfield.webp';
import cities from '../images/century_city_and_dt.jpg';
import downArrow from '../images/downArrow.png';

const Home = () => {
    return (
      
    <div className='bg-black'>

      <div className='bg-[url("./images/losangeles_049_4059_up.jpg")] h-screen'>
        <Header />
        <h1 className='text-center m-10 md:m-20 font-mono	font-extralight	text-4xl	'>Century City</h1>
        <img src={downArrow} alt="century city skyline" className='w-10 h-10 md:w-20 md:h-20 mx-auto mt-96 md:mt-[500px]'></img>
      </div>

      <div className='mb-20'>
        <p className='text-white p-5 py-10 md:pt-80 md:px-40 font-mono	font-extralight leading-10 text-xl'>Welcome to Century City, Los Angeles! This iconic neighborhood in the heart of the city is a true embodiment of modern luxury and urban sophistication. With its towering skyscrapers, upscale shopping, and a dynamic business hub, Century City offers a unique blend of commerce and culture. </p>
        <p className='text-white  pb-20 px-40 font-mono	font-extralight leading-10 text-xl hidden md:block'>Explore the finest dining establishments, stroll through beautifully landscaped avenues, and immerse yourself in the vibrant energy of this bustling district. Discover the allure of Century City, where the past meets the future in one of Los Angeles' most prestigious enclaves.</p>
        <img src={BWSkyline} alt="century city skyline"></img>
      </div>
        
      

      <HomeTile 
      textLeft={true}
      text="What Is Century City, Los Angeles?"
      image={cities}
      link="/what-is"
    />
    <HomeTile 
      textLeft={false}
      text="What Is There To Do In Century City?"
      image={westfield}
      link="/things-to-do"
    />
    <HomeTile 
      textLeft={true}
      text="Expolre The History Of Century City"
      image={historyImage}
      link="/history"
    />


      
      <div className='mt-20 h-20 md:h-96 bg-gradient-to-b from-black to-[#03459c]'>
      </div>
      <img src={skyline} alt="century city skyline"></img>

    </div>
  );
}

export default Home;


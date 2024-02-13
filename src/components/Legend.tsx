import React from 'react';


const Legend = () => {
  return (
    <div className="m-2">
      <div className="flex">
        <img src={"/red.png"} alt="Legend Image"  width={30} height={30} />
        <p className='my-auto'>Critical Access</p>
      </div>
      <div className="flex">
        <img src={"/blue.png"} alt="Legend Image"  width={30} height={30} />
        <p className='my-auto'>Hospitals with fewer than 50 beds</p>
      </div>
      <div className="flex">
        <img src={"/green.png"} alt="Legend Image"  width={30} height={30} />
        <p className='my-auto'>Other</p>
      </div>
    </div>
  );
};

export default Legend;

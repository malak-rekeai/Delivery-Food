'use client'
import React from 'react';
import Countdown from 'react-countdown';

const endingData = new Date("2024-12-31").getTime(); // Set your countdown date

const CountDownTimer = () => {
  return (
    <div className='text-white'>
      <Countdown
        date={endingData}
        renderer={({ days , hours, minutes, seconds, completed }) => {
          if (completed) {
            return <span className='text-5xl font-bold'>Offer Expired!</span>;
          } else {
            return (
              <span className='text-5xl font-bold'>
               {days} : {hours} : {minutes} : {seconds}
              </span>
            );
          }
        }}
      />
    </div>
  );
};

export default CountDownTimer;

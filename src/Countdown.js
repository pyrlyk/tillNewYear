import React from 'react'

function Countdown(){

    const newYears = '1 Jan 2021';
    const newYearDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600 ) % 24;
    const minutes = Math.floor(totalSeconds / 60 ) % 60;
    const seconds =  Math.floor(totalSeconds) % 60;
    
    
    return (
        <div className = "coundown-container">
             <h1>New Year's Eve</h1>
            <div className  = "countdown-el days-c">
                <p className = "big-text">{days}</p>
                <span>days</span>
                </div>

                <div className  = "countdown-el hours-c">
                <p className = "big-text">{hours}</p>
                <span>hours</span>
                </div>

                <div className  = "countdown-el mins-c">
                 <p className = "big-text">{minutes}</p>
                <span>mins</span>
                </div>

                <div className  = "countdown-el seconds-c">
                  <p className = "big-text">{seconds }</p>
                <span>seconds</span>
                
            </div>
        </div>
    )
}

export default Countdown;

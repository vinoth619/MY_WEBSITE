import React, { useState, useEffect } from 'react';
import { personalinfo } from './personal';





const App: React.FC = () => {
  const [text, setText] = useState<string>(""); 
  const [Desi, setDesi] = useState<string>(""); 

  const fullText:string = personalinfo.ROLL; 
  const DesiText:string=personalinfo.Designation

  useEffect(() => {
       let currentIndex = 0;
       const intervalId = setInterval(() => {
         currentIndex++
        if (currentIndex <fullText.length) {
       setText((prevText) => prevText + fullText[currentIndex]);
        } else {
        clearInterval(intervalId); 
         }}, 30);
     return () => clearInterval(intervalId);
      }, []);




      useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
          currentIndex++
         if (currentIndex <DesiText.length) {
        setDesi((prevText) => prevText + DesiText[currentIndex]);
         } else {
         clearInterval(intervalId); 
          }}, 30);
      return () => clearInterval(intervalId);
       }, []);

  return (
    <div className='BODY'>

      <div className='HOME'>
      <div className='PARAIMG'>

     
     
       <div className='PARA'>
   
       <h1>{"H"+text}</h1> 

       <p>{"E"+Desi}</p>

        </div>

        <div className='photo'>
      <img src={personalinfo.img} alt="photo" />
      </div>

     
     

      </div>
    
      </div>

     
    </div>
  );
};

export default App;

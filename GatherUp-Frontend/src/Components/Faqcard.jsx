import React from 'react';
import "./section.css"
function FaqCard({ques, ans}) {
    return ( 
        <div className="card flex flex-col justify-center items-centers">
             
            <p className='text-2xl font-bold text-center'>{ques}</p>
            <p className='text-center text-[18px] mt-3.5 mb-10'>{ans}</p>

            <hr  className='w-2/3 mx-auto'/>
        </div>


     );
}

export default FaqCard;
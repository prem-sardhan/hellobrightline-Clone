import React from 'react'
import "./styleland.css"
import { Image } from '@chakra-ui/react'


const Landing = () => {
  return (
   <>
   <div className='land1'>
   <div className='content'>
    <div className='title'>Built for kids and teens here for,
    <div className='slider'>
      <div>confidence</div>
      <div>Relationship</div>
      <div>anxiety</div>
      <div>tough behaviour</div>
      <div>Coaches</div>
      <div>identity</div>
      <div>therapist</div>
      <div>depression</div>
    </div>
    
    </div>
    <h3>Brightline brings virtual behavioral and mental health care to families, when and where you need it.</h3>
    <button className='allbtn' >Join Today</button>



   </div>


   <div> <Image className='image-1' src="https://images.ctfassets.net/96gdpqkm7elu/4eW7qi0iZ4Z1eCoDv1Xzps/13cbf0fa4bd5bacc8fdeaab3dcf3144f/homepage_hero_daughter_hugging_dad_acb43749bb.png?w=1256&h=1570&fit=crop&fm=webp&q=90" alt="eror"/></div>
   </div>

   {/* LAND_______________----2___________________-LAND______________2 */}

   <div className='land2'>
    <h2>Virtual care that works for kids and families</h2>
    <h3>School pressure, stress, IEPs, anxiety, cyberbullies, tough behavior, self-esteem issues — whatever families are dealing with, we have options that can help</h3>
   </div>

   {/* LAND+_______3_________________3==============3===================3======LAND3 */}
   
   
   </>
  )
}

export default Landing
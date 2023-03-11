import React from 'react'
import Headings from '../SingleComponent/Headings'
import faqs from './FAQdata'
import FAQpage from './FAQpage';
function OurCustomer() {
  return (
    <section name='customer' className='mt-5 md:mt-10 pt-[49px]'>
      <Headings text='Who we serve' />
      <ul className='text-[28px] text-[#333333] flex flex-col md:flex-row gap-8 justify-between capitalize mt-10  md:mt-24 text-center'>
        <li>private & public <br/>hospitals</li>
        <li>laboratories</li>
        <li>healthcare facilities</li>
      </ul>

      {/* USE HOC HERE */}
      <div className='mb-[85px] mt-24'>
        <Headings text='Frequently Asked Questions' />
      </div>


      <div>
        {faqs.map(({ index, question, answer }) => (
        
          <FAQpage question={question} answer={answer} key={index} />
        ))}
      </div>


      

  

    </section>
  )
}

export default OurCustomer







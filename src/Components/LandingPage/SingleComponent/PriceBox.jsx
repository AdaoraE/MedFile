import React from 'react'
import LiSection from './LiSection'
function PriceBox(props) {
  return (
    <>
          <div className='w-[434px] h-[658px] border-2 border-main-color rounded-lg text-center p-10'>
              <h2 className='font-meduim text-center text-2xl text-text-color border-b-2'>{props.heading}</h2>
              <ul className='test-sm font-normal space-y-6 capitalize'>
                  <LiSection {...props.list} />
                  <LiSection text='appointment scheduling' />
                  <LiSection text='Doctor Work Bench' />
                  <LiSection text='Nursing Work Bench' />
                  <LiSection text='Bay Management / Reception' />
                  <LiSection text='Performance Management' />
                  <LiSection text='Patient Accounting & Billing' />
              </ul>
              <div class="flex justify-center items-baseline mt-8 mb-2 text-main-color font-semibold">
                  <span class="text-5xl ">$900</span>
                  <span className='text-2xl'>/month</span>
              </div>
              <p className='text-l text-lg font-normal mb-4 text-[#6A737C]'>Billed monthly</p>
              <button className="text-white bg-main-color hover:bg-[#097192] rounded-lg text-2xl text-center font-semibold px py-2 px-28">Select Plan</button>

          </div>
    </>
  )
}

export default PriceBox

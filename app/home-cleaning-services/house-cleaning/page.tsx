import { call } from 'react-native-phone-call'
import Link from 'next/link'
import React from 'react'


const HouseCleaning = () => {
  const phoneNumber = '15202502466'
  
  const handleCall = () => {
    call(phoneNumber)
    .then(()=> {
      console.log('Call initiated successfully')
    })
    .catch((error)=> {
      console.error('Error initiating call:', error)
    })
}

  return (
    <div className="mx-32 my-32">
      <div>
        <h1>A clean home puts your mind at ease.</h1>
        <Link href="#" onClick={handleCall}><strong>Give us a call.</strong></Link>
      </div>
      <h1 className='text-3xl my-5'>
        Trust Ladybug Cleaning for Expert Home Cleaning
      </h1>
      <div>
        <p className='text-lg'>
          In today's busy world, finding time to keep your home clean and sparkling can be a challenge. That's where Ladybug Cleaning comes in. Our team of experienced and trustworthy cleaners is dedicated to providing you with exceptional home cleaning services that leave your living space spotless.
        </p>
        
        <br/>

        <ul className='text-3xl mb-2'>
          Why Choose Ladybug Cleaning?
        </ul>
          <li>
            <strong>Trustworthy and Reliable:</strong> Our cleaners are background-checked and trained to deliver consistent, high-quality results.
          </li>
          <li>
            <strong>Customized Cleaning Plans:</strong> We tailor our cleaning services to your specific needs and preferences, ensuring your home is cleaned exactly how you want it.
          </li>
          <li>
          <strong>Attention to Detail:</strong> Our cleaners pay close attention to even the smallest details, leaving no corner untouched.
          </li>
          <li>
            <strong>Flexible Scheduling:</strong> We work around your busy schedule to provide convenient cleaning appointments.
          </li>
          <li>
          <strong>Satisfaction Guaranteed:</strong> We stand behind our work and offer a satisfaction guarantee. If you're not happy with our services, we'll make it right.
          </li>

        <br/>

        <p className="text-lg">
          At Ladybug Cleaning, we understand the struggle.  That's why we offer a variety of cleaning services designed to fit your busy life and budget. We'll transform your home into a haven, giving you back precious time and peace of mind.
        </p>

        <ul className='text-3xl mb-2 mt-5'>
          Our Services Include:
        </ul>
          <li>
            <strong>Regular Cleaning:</strong> Weekly, bi-weekly, or monthly cleanings to maintain a tidy home.
          </li>
          <li>
            <strong>Deep Cleaning:</strong> Thorough cleaning of your entire home, including hard-to-reach areas.
          </li>
          <li>
            <strong>Move-In/Move-Out Cleaning:</strong> Professional cleaning services for your new or old home.
          </li>
          <li>
            <strong>Specialized Cleaning:</strong> We can also handle specific cleaning tasks like window cleaning or carpet cleaning.
          </li>

          <p className='text-3xl my-5'>
            Let Ladybug Cleaning Take Care of Your Home
          </p>
          <p className='text-lg my-5'>
            Trust Ladybug Cleaning to provide expert, reliable, and affordable home cleaning services. Contact us today to schedule a free estimate and experience the difference.
          </p>
      </div>
    </div>
  )
}

export default HouseCleaning

import React, { useState } from 'react'
import TestimonialItem from './testimonialItem'

function Testimonial() {
  const [testimonialContent, setTestimonialContent] = useState([
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellusorci massa, maximus a velit sit amet, fringilla convallis tellus.',
    'Morbi auctor consectetur convallis. Suspendisse at lobortis libero. Curabitur commodo dapibus rhoncus.',
    'Donec accumsan magna et magna auctor pretium. Proin lectus augue, tincidunt eu quam in, finibus imperdiet lectus. Donec commodo, est eu semper pellentesque, sapien arcu tempor leo, quis commodo nisl arcu vitae ligula.',
    'Duis et elit ut quam finibus accumsan vitae non leo.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci massa, maximus a velit sit amet, fringilla convallis tellus.',
  ])

  const testimonialContentList = testimonialContent.map((content, index) => {
    return index === 0 ? (
      <div key={index} className='carousel-item active'>
        <TestimonialItem content={content} />
      </div>
    ) : (
      <div key={index} className='carousel-item'>
        <TestimonialItem content={content} />
      </div>
    )
  })

  return (
    <div className='card mb-4'>
      <h2 className='card-header text-center'>Testimonials</h2>
      <div className='card-body'>
        <div id='carousel' className='carousel slide' data-bs-ride='false'>
          <ol className='carousel-indicators mb-0'>
            <li
              data-bs-target='#carousel'
              data-bs-slide-to='0'
              className='active bg-secondary'
            ></li>
            <li
              data-bs-target='#carousel'
              data-bs-slide-to='1'
              className='bg-secondary'
            ></li>
            <li
              data-bs-target='#carousel'
              data-bs-slide-to='2'
              className='bg-secondary'
            ></li>
            <li
              data-bs-target='#carousel'
              data-bs-slide-to='3'
              className='bg-secondary'
            ></li>
            <li
              data-bs-target='#carousel'
              data-bs-slide-to='4'
              className='bg-secondary'
            ></li>
          </ol>
          <div className='carousel-inner'>{testimonialContentList}</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial

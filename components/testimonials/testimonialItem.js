function TestimonialItem({ content }) {
  return (
    <figure className='text-center mb-4'>
      <blockquote className='blockquote'>
        <p> {content}</p>
      </blockquote>
      <figcaption className='blockquote-footer'>Firstname Lastname</figcaption>
    </figure>
  )
}

export default TestimonialItem

function MainCard() {
  return (
    <div className='card mb-4'>
      <h2 className='card-header text-center'>Firstname Lastname</h2>
      <img
        src='/850x400.png'
        alt='portrait of firstname  lastname'
        className='w-100'
      />
      <div className='card-body'>
        <p className='card-text lead'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          orci massa, maximus a velit sit amet, fringilla convallis tellus.
        </p>
        <p className='card-text'>
          Morbi auctor consectetur convallis. Suspendisse at lobortis libero.
          Curabitur commodo dapibus rhoncus. Donec accumsan magna et magna
          auctor pretium. Proin lectus augue, tincidunt eu quam in, finibus
          imperdiet lectus. Donec commodo, est eu semper pellentesque, sapien
          arcu tempor leo, quis commodo nisl arcu vitae ligula. Duis et elit ut
          quam finibus accumsan vitae non leo.
        </p>
        <figure className='w-75 mx-auto text-center'>
          <blockquote className='blockquote'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              orci massa, maximus a velit sit amet, fringilla convallis tellus.
            </p>
          </blockquote>
          <figcaption className='blockquote-footer'>
            Firstname Lastname
          </figcaption>
        </figure>
        <p className='card-text'>
          Morbi auctor consectetur convallis. Suspendisse at lobortis libero.
          Curabitur commodo dapibus rhoncus. Donec accumsan magna et magna
          auctor pretium. Proin lectus augue, tincidunt eu quam in, finibus
          imperdiet lectus.
        </p>
      </div>
    </div>
  )
}

export default MainCard

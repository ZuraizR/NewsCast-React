import React from 'react'

const NewsItem = (props) => {
  let { title, description, imgUrl, newsUrl, author, date, source } = props
  return (
    <div className='my-3'>
      <div className='card'>
        <span
          className='position-absolute top-0 translate-middle badge rounded-pill bg-danger'
          style={{ left: '50%', zIndex: '1' }}
          title={source}
        >
          {source}
        </span>
        <img
          src={
            !imgUrl
              ? 'https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg'
              : imgUrl
          }
          className='card-img-top'
          style={{
            height: '15rem',
            width: '100%',
            objectFit: 'cover',
          }}
          alt='image'
        />
        <div className='card-body'>
          <h5 className='card-title'>{title}...</h5>
          <p className='card-text'>{description}...</p>
          <p className='card-text'>
            <small className='text-muted'>
              By {!author ? 'Unknown' : author} on{' '}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target='_blank' className='btn btn-sm btn-dark'>
            Read More
          </a>
        </div>
      </div>
    </div>
  )
}

export default NewsItem

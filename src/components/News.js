import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

import PropTypes from 'prop-types'

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const updateNews = async () => {
    props.setProgress(0)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=33b70fb38f5a4726bd1776102276f6a0&page=${page}&pageSize=${props.pageSize}`
    setLoading(true)
    props.setProgress(30)
    let data = await fetch(url)
    props.setProgress(60)
    let parsedData = await data.json()
    props.setProgress(90)

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100)
  }

  useEffect(() => {
    document.title = `NewsCast - ${
      props.category[0].toUpperCase() + props.category.substring(1)
    }`
    updateNews()
  }, [])

  const fetchMoreData = async () => {
    props.setProgress(0)
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=33b70fb38f5a4726bd1776102276f6a0&page=${
      page + 1
    }&pageSize=${props.pageSize}`
    setPage(page + 1)
    // setLoading(true)
    props.setProgress(30)
    let data = await fetch(url)
    props.setProgress(60)
    let parsedData = await data.json()
    props.setProgress(80)

    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    // setLoading(false)
    props.setProgress(100)
  }

  return (
    <>
      <h1
        className='text-center pt-5'
        style={{
          margin: '40px 0px',
          letterSpacing: '0.1rem',
          textShadow: '1px 1px 2px #333',
        }}
      >
        NewsCast -{' '}
        {props.category[0].toUpperCase() + props.category.substring(1)}{' '}
        Headlines
      </h1>

      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className='container'>
          <div className='row'>
            {articles.map((news) => {
              return (
                <div className='col-md-4' key={news.url}>
                  <NewsItem
                    title={news.title}
                    description={news.description}
                    imgUrl={news.urlToImage}
                    newsUrl={news.url}
                    author={news.author}
                    date={news.publishedAt}
                    source={news.source.name}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News

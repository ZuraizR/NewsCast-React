import React, { useState } from 'react'
import NewsContext from './newsContext'

const NewsState = (props) => {
  const [country, setCountry] = useState('in')
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const handleChange = (e) => {
    setCountry(e.target.value)
  }
  return (
    <NewsContext.Provider
      value={{
        country,
        setCountry,
        handleChange,
        articles,
        setArticles,
        loading,
        setLoading,
        page,
        setPage,
        totalResults,
        setTotalResults,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  )
}

export default NewsState

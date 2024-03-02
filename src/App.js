import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import NewsState from './components/context/news/newsState'

const App = () => {
  const pageSize = 12

  const [progress, setProgress] = useState(0)
  const [country, setCountry] = useState('in')

  return (
    <div>
      <NewsState>
        <Router>
          <Navbar setCountry={setCountry} />
          <LoadingBar color='#f11946' height={2} progress={progress} />
          <Routes>
            <Route
              exact
              path='/'
              element={
                <News
                  setProgress={setProgress}
                  setCountry={setCountry}
                  key='general'
                  pageSize={pageSize}
                  country={country}
                  category='general'
                />
              }
            />

            <Route
              exact
              path='/business'
              element={
                <News
                  setProgress={setProgress}
                  setCountry={setCountry}
                  key='business'
                  pageSize={pageSize}
                  country={country}
                  category='business'
                />
              }
            />

            <Route
              exact
              path='/entertainment'
              element={
                <News
                  setProgress={setProgress}
                  setCountry={setCountry}
                  key='entertainment'
                  pageSize={pageSize}
                  country={country}
                  category='entertainment'
                />
              }
            />

            <Route
              exact
              path='/general'
              element={
                <News
                  setProgress={setProgress}
                  setCountry={setCountry}
                  key='general'
                  pageSize={pageSize}
                  country={country}
                  category='general'
                />
              }
            />

            <Route
              exact
              path='/health'
              element={
                <News
                  setProgress={setProgress}
                  setCountry={setCountry}
                  key='health'
                  pageSize={pageSize}
                  country={country}
                  category='health'
                />
              }
            />

            <Route
              exact
              path='/science'
              element={
                <News
                  setProgress={setProgress}
                  setCountry={setCountry}
                  key='science'
                  pageSize={pageSize}
                  country={country}
                  category='science'
                />
              }
            />

            <Route
              exact
              path='/sports'
              element={
                <News
                  setProgress={setProgress}
                  setCountry={setCountry}
                  key='sports'
                  pageSize={pageSize}
                  country={country}
                  category='sports'
                />
              }
            />

            <Route
              exact
              path='/technology'
              element={
                <News
                  setProgress={setProgress}
                  setCountry={setCountry}
                  key='technology'
                  pageSize={pageSize}
                  country={country}
                  category='technology'
                />
              }
            />
          </Routes>
        </Router>
      </NewsState>
    </div>
  )
}

export default App

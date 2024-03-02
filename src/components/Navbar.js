import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import newsContext from './context/news/newsContext'

const Navbar = () => {
  let location = useLocation()
  let context = useContext(newsContext)
  let { handleChange } = context

  return (
    <div>
      <nav
        className='navbar fixed-top top-0 z-3 bg-dark navbar-expand-lg bg-body-tertiary'
        data-bs-theme='dark'
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            NewsCast
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/' && 'active'
                  }`}
                  aria-current='page'
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/business' && 'active'
                  }`}
                  to='/business'
                >
                  Business
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/entertainment' && 'active'
                  }`}
                  to='/entertainment'
                >
                  Entertainment
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/general' && 'active'
                  }`}
                  to='/general'
                >
                  General
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/health' && 'active'
                  }`}
                  to='/health'
                >
                  Health
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/science' && 'active'
                  }`}
                  to='/science'
                >
                  Science
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/sports' && 'active'
                  }`}
                  to='/sports'
                >
                  Sports
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className={`nav-link ${
                    location.pathname === '/technology' && 'active'
                  }`}
                  to='/technology'
                >
                  Technology
                </Link>
              </li>
            </ul>
            <div className='d-flex align-items-center justify-content-center me-4'>
              <label
                className='text-light me-2'
                htmlFor='selectCountry'
                style={{ fontSize: '18px' }}
              >
                Select Country:
              </label>
              <select
                className='form-select-sm p-1'
                id='selectCountry'
                aria-label='Default select example'
                onChange={handleChange}
              >
                <option value='in'>IN</option>
                <option value='us'>US</option>
                <option value='sa'>SA</option>
                <option value='nz'>NZ</option>
                <option value='ae'>AE</option>
                <option value='ar'>AR</option>
                <option value='at'>AT</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

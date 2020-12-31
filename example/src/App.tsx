import React from 'react'

// Libraries
import ReactFetchImage from 'react-fetch-image'

const App = () => {
  return (
    <ReactFetchImage
      className='mx-auto'
      loader={<div>Loading ...</div>}
      fetcher={{
        url: 'http://localhost:8000/api/v1/bucket/companies/1/image',
        settings: {
          headers: {
            authorization: `Bearer eyJhbGciOiJSU.eyJpZCI6IjQwZjU1M2ZiLWZjYWItNGYzOS1iNG.Q91RM8V_ojZNwgpp5YMFheU2kEftilJ4BFbdTXIZLGE`
          }
        }
      }}
    />
  )
}

export default App

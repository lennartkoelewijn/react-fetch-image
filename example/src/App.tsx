import React, { useEffect, useState } from 'react'

// Libraries
import ReactFetchImage, { fetchBase64 } from 'react-fetch-image'

const App = () => {
  const [backgroundSrc, setBackgroundSrc] = useState('')
  const [fetchingBackgroundSrc, setFetchingBackgroundSrc] = useState(true)
  const fetcher = {
    url: 'http://localhost:8000/api/v1/bucket/companies/1/image',
    settings: {
      headers: {
        authorization: `Bearer eyJhbGciOiJSUzI1NiIsIn.eyJpZCI6IjQwZjU1M2ZiLW.Tmgf94xwL4CDUZuiIS50`
      }
    }
  }

  useEffect(() => {
    fetchBase64({
      ...fetcher,
      ...{
        callback: (base64: any) => {
          setBackgroundSrc(base64)
          setFetchingBackgroundSrc(false)
        },
        callbackError: () => {
          setFetchingBackgroundSrc(false)
        }
      }
    })
  }, [fetcher])

  return (
    <>
      {fetchingBackgroundSrc && (
        <div>Loading ...</div>
      )}
      {!fetchingBackgroundSrc && (
        <div 
          style={{
            background: `url(${backgroundSrc})`,
            width: '100px',
            height: '50px',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      )}
      <ReactFetchImage
        className='mx-auto'
        loader={<div>Loading ...</div>}
        fetcher={fetcher}
      />
    </>
  )
}

export default App

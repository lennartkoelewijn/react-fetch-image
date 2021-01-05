# react-fetch-image

> Get and display images using the fetch API. Useful for images on an authorized route. The component fetches the image from an endpoint and converts it to base64

[![NPM](https://img.shields.io/npm/v/react-fetch-image.svg)](https://www.npmjs.com/package/react-fetch-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-fetch-image
```

## Usage

```tsx
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
        authorization: `Bearer eyJhbGciOiJSUzI1N.eyJpZCI6IjQwZjU1M2ZiLWZjYWIt.Tmgf94xwL4CDUZuiIS50Zw3`
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


```

## fetchBase64

Use this helper when you want to fetch the image outside of the default component, for example when you want to use the source as background

## Props

Common props you may want to specify:

- `loader` - show this HTML or component while fetching the image
- `fetcher` - object with url and settings for the fetch API to use
## License

MIT © [lennartkoelewijn](https://github.com/lennartkoelewijn)

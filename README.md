# react-fetch-image

> Get and display images using the fetch method. Useful for images on an authorized route.

[![NPM](https://img.shields.io/npm/v/react-fetch-image.svg)](https://www.npmjs.com/package/react-fetch-image) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-fetch-image
```

## Usage

```tsx
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

```

## Props

Common props you may want to specify:

- `className` - CSS classes
- `alt` - alt attribute
- `loader` - show this component while fetching the image
- `fetcher` - url and settings for the fetch to use
## License

MIT © [lennartkoelewijn](https://github.com/lennartkoelewijn)

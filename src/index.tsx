import * as React from 'react'

// Helpers
import fetchBase64 from './helpers/fetchBase64'

export { fetchBase64 }

interface Props {
  className?: string
  alt?: string
  loader?: any
  fetcher: Fetcher
  [key: string]: any
}
interface Fetcher {
  url: string
  settings?: Object
}

const ReactFetchImage = ({
  className = '',
  alt = '',
  loader = null,
  fetcher,
  ...props
}: Props) => {
  const [fetching, setFetching] = React.useState(true)
  const [src, setSrc] = React.useState('')

  React.useEffect(() => {
    fetchBase64({
      ...fetcher,
      ...{
        callback: (base64: any) => {
          setSrc(base64)
          setFetching(false)
        },
        callbackError: () => {
          setFetching(false)
        }
      }
    })
  }, [])

  if (fetching) {
    return loader
  }

  return <img className={className} src={src} alt={alt} {...props} />
}

export default ReactFetchImage

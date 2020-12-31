import * as React from 'react'

interface Props {
  className?: string
  alt?: string
  loader?: any
  fetcher: Fetcher
}
interface Fetcher {
  url: string
  settings?: Object
}

const ReactFetchImage = ({
  className = '',
  alt = '',
  loader = null,
  fetcher
}: Props) => {
  const [fetching, setFetching] = React.useState(true)
  const [src, setSrc] = React.useState('')

  React.useEffect(() => {
    const get = async () => {
      const response = await fetch(fetcher.url, fetcher.settings)

      response
        .blob()
        .then((raw: Blob) => ({
          contentType: response.headers.get('Content-Type'),
          raw
        }))
        .then((data: any) => {
          var reader = new FileReader()
          reader.onload = function () {
            const result: any = this.result

            setSrc(result)
            setFetching(false)
          }
          reader.readAsDataURL(data.raw)
        })
    }

    get()
  }, [])

  if (fetching) {
    return loader
  }

  return <img className={className} src={src} alt={alt} />
}

export default ReactFetchImage

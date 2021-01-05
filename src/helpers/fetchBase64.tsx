interface Props {
  url: string
  settings?: Object
  callback: (value: string) => void
  callbackError?: (value: string) => void
}

export default function fetchBase64({
  url,
  settings = {},
  callback,
  callbackError = () => {}
}: Props) {
  try {
    fetch(url, settings).then((response) => {
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

            callback(result)
          }
          reader.readAsDataURL(data.raw)
        })
    })
  } catch (error) {
    callbackError(error)
  }
}

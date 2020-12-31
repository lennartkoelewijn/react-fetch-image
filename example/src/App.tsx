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
            authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwZjU1M2ZiLWZjYWItNGYzOS1iNGI5LTkzOTViY2IyNzFmNiIsImVtYWlsIjoibGVubmFydEB1d2J1c2luZXNzb25saW5lLm5sIiwicGVybWlzc2lvbnMiOnsiZ2VuZXJhbCI6WyJtLmFkbWluIiwidi5kYXNoYm9hcmQiLCJ2LmNvbm5lY3Rpb25zIiwidi50b29scyIsInYuY29tcGFueSIsIm0uY29tcGFueSIsInYuY29tcGFueS1jbGllbnRzIiwibS5jb21wYW55LWNsaWVudHMiLCJ2LmNvbXBhbnktZW1wbG95ZWVzIiwibS5jb21wYW55LWVtcGxveWVlcyIsInYuZmVlZCJdLCJjb21wYW5pZXMiOnsiN2UyN2Y4YjEtZGU5ZC00N2M0LWJhYmQtMmEwYWQ3MGYzNDM0IjpbInYuZGFzaGJvYXJkIiwidi5jb25uZWN0aW9ucyIsInYudG9vbHMiLCJ2LmZlZWQiXSwiMjFlN2VjZTQtMjk5ZS00NjZkLWExZmUtYzNmMWZjNjkxZDQ4IjpbInYuZGFzaGJvYXJkIiwidi5jb25uZWN0aW9ucyIsInYudG9vbHMiXX19LCJpYXQiOjE2MDk0MDQ4MDMsImV4cCI6MTYwOTQwODQwMywiYXVkIjoibXlhbGxwYXJ0cy5ubCIsImlzcyI6ImF1dGgubXlhbGxwYXJ0cy5ubCIsInN1YiI6IjQwZjU1M2ZiLWZjYWItNGYzOS1iNGI5LTkzOTViY2IyNzFmNiJ9.Q91RM8V_ojZNwgpp5YMFheU2kEftilJ4BFbdTXIZLGEXG76PWItvqBKA5jCYwUfRR2ljCT1zh9QP99t2Fx2uTIjWDYr99shXakpLHYntApkBtxCwRy7eL7m6N87AE6TNSLf1Pq_qIRdYAluTgvB9o1bvuhN2zkJ3k-xUENFzrgY`
          }
        }
      }}
    />
  )
}

export default App

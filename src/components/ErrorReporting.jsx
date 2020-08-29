import React from 'react'

const ErrorReporting = (props) => {
  const { marginBottom } = props
  return (
    <div style={marginBottom} id="report-error">
      <h2>Error Reporting</h2>
      <p>Found a bug or notice incorrect data?</p>
      <p>
        Submit an issue
{' '}
        <a href="https://github.com/tsclay/JRE-API/issues">here</a>
      </p>
      <p>
        Some episodes only have podcast links or only video links. This is
        becuase not all episodes are found in both media. For example, episodes
        108 and 128 can&apos;t be found on the PowerfulJRE YouTube channel, but
        they can be found where the JRE podcast is available.
      </p>
      <p>
        If you have reliable data for any episodes missing descriptions or
        links, link them in your issue, or they will not be considered.
      </p>
    </div>
  )
}

export default ErrorReporting

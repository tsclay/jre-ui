import React from 'react'
import Typography from '@material-ui/core/Typography'

const ErrorReporting = (props) => {
  const { marginBottom, typographySpacer } = props
  return (
    <div style={marginBottom} id="report-error">
      <h2>Error Reporting</h2>
      <Typography style={typographySpacer}>
        Found a bug or notice incorrect data?
      </Typography>
      <Typography style={typographySpacer}>
        Submit an issue{' '}
        <a href="https://github.com/tsclay/JRE-API/issues">here</a>.
      </Typography>
      <Typography style={typographySpacer}>
        Some episodes only have podcast links or only video links. This is
        becuase not all episodes are found in both media. For example, episodes
        108 and 128 can&apos;t be found on the PowerfulJRE YouTube channel, but
        they can be found where the JRE podcast is available.
      </Typography>
      <Typography style={typographySpacer}>
        If you have reliable data for any episodes missing descriptions or
        links, link them in your issue, or they will not be considered.
      </Typography>
    </div>
  )
}

export default ErrorReporting

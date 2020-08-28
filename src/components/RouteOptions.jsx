import React from 'react'
import { Box } from '@material-ui/core'

const RouteOptions = (props) => {
  const { marginBottom } = props
  const splitWidth = { width: '45%' }
  const httpRequest = { backgroundColor: '#c3c3c3', fontFamily: 'Monospace' }
  return (
    <div style={marginBottom}>
      <div>
        <Box display="flex" justifyContent="space-between">
          <span style={splitWidth}>
            <span style={httpRequest}>GET</span>
            <span>MMA Shows</span>
          </span>
          <input
            style={splitWidth}
            type="text"
            value="/api/v1/jre?isMMA=true&date=desc"
            readOnly
          />
        </Box>
      </div>
      <div>
        <Box display="flex" justifyContent="space-between">
          <span style={splitWidth}>
            <span style={httpRequest}>GET</span>
            <span>Fight Companion</span>
          </span>
          <input
            style={splitWidth}
            type="text"
            value="/api/v1/jre?isFC=true&date=desc"
            readOnly
          />
        </Box>
      </div>
      <div>
        <Box display="flex" justifyContent="space-between">
          <span style={splitWidth}>
            <span style={httpRequest}>GET</span>
            <span>Joe Rogan Questions Everything (JRQE)</span>
          </span>
          <input
            style={splitWidth}
            type="text"
            value="/api/v1/jre?isJRQE=true&date=desc"
            readOnly
          />
        </Box>
      </div>
      <div>
        <Box display="flex" justifyContent="space-between">
          <span style={splitWidth}>
            <span style={httpRequest}>GET</span>
            <span>Out of Studio</span>
          </span>
          <input
            style={splitWidth}
            type="text"
            value="/api/v1/jre?episode_id=null&date=desc"
            readOnly
          />
        </Box>
      </div>
    </div>
  )
}

export default RouteOptions

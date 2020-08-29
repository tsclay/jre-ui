/* eslint-disable react/jsx-one-expression-per-line */
import React, {useState} from 'react'
import { Box } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    },
    '&$expanded': {
      margin: 'auto'
    }
  },
  expanded: {}
})(MuiAccordion)

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56
    }
  },
  content: {
    '&$expanded': {
      margin: '12px 0'
    }
  },
  expanded: {}
})(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiAccordionDetails)

const RouteOptions = (props) => {
  const { marginBottom } = props
  const splitWidth = { width: '45%' }
  const [expanded, setExpanded] = useState('panel5')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div style={marginBottom} id="usage">
      <h2>Usage</h2>
      <p>The base URL for the API is <span className="inline-code"><code>/api/v1/jre</code></span></p>
      <p>
        The way to filter episodes is by setting property:value pairs as URL
        queries:
      </p>
      <div className="basic-code-blocks">
        <code>
          <span style={{display: "block", paddingBottom: '0.25em'}}>date=(asc || desc)</span>
          <br />
          <span style={{display: "block", paddingBottom: '0.25em'}}>episode_id=(int > 0 || null)</span>
          <br />
          <span style={{display: "block", paddingBottom: '0.25em'}}>isFC=(Boolean)</span>
          <br />
          <span style={{display: "block", paddingBottom: '0.25em'}}>isMMA=(Boolean)</span>
          <br />
          <span style={{display: "block", paddingBottom: '0.25em'}}>isJRQE=(Boolean)</span>
        </code>
      </div>
      <p style={{marginBottom: '3em'}}>
        <strong>Important:</strong> Only specify one of the Boolean properties if doing so. Specifying multiple as true will return no episodes. This is because there are no episodes marked as part of multiple types.
      </p>
      <p>Look at the following for more info on these queries:</p>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square
        expanded={expanded === 'panel5'}
        onChange={handleChange('panel5')}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Box display="flex" justifyContent="space-between" width="100%">
            <span style={splitWidth}>
              <span className="inline-code">GET</span>{" "}
              <span>All Episodes</span>
            </span>
            <input
              style={splitWidth}
              type="text"
              value="/api/v1/jre/all"
              readOnly
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="body2">
            Get all episodes of the JRE Podcast, sorting by date ascending 
            or descending (orders descending by default). This route is only 
            available with an API Key (form below), and is placed behind 
            rate-limiting middleware. <em>Call this route efficiently because 
            subsequent requests will take significantly longer to resolve.</em>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Box display="flex" justifyContent="space-between" width="100%">
            <span style={splitWidth}>
              <span className="inline-code">GET</span>{" "}
              <span>MMA Shows</span>
            </span>
            <input
              style={splitWidth}
              type="text"
              value="/api/v1/jre?isMMA=true&date=desc"
              readOnly
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="body2">
            Get only the MMA Shows from the JRE podcast, and show the most recent ones first. To date, there are 97
            episodes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Box display="flex" justifyContent="space-between" width="100%">
            <span style={splitWidth}>
              <span className="inline-code">GET</span>{" "}
              <span>Fight Companion</span>
            </span>
            <input
              style={splitWidth}
              type="text"
              value="/api/v1/jre?isFC=true&date=desc"
              readOnly
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="body2">
            Get only Fight Companion episodes, and show the most recent ones first. To date, there are 54 episodes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Box display="flex" justifyContent="space-between" width="100%">
            <span style={splitWidth}>
             <span className="inline-code">GET</span>{" "}
              <span>Joe Rogan Questions Everything (JRQE)</span>
            </span>
            <input
              style={splitWidth}
              type="text"
              value="/api/v1/jre?isJRQE=true&date=desc"
              readOnly
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="body2">
            These are the 6 episodes that Joe Rogan recorded with Duncan Trussel
            as part of <em>Joe Rogan Questions Everything</em>, which aired on
            the SyFy network during summer 2013. This query will return only these 6 episodes.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        square
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Box display="flex" justifyContent="space-between" width="100%">
            <span style={splitWidth}>
              <span className="inline-code">GET</span>{" "}
              <span>Out of Studio</span>
            </span>
            <input
              style={splitWidth}
              type="text"
              value="/api/v1/jre?episode_id=null&date=desc"
              readOnly
            />
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="body2">
            These are the more unconventional episodes of the JRE Podcast, being
            recording in cars, hotels, paradise. You get the idea. As such,
            these episodes don&apos;t come with conventional episode numbers, so
            the episode_id property is set to null. This will return the 10 episodes where <code className="inline-code">episode_id = null</code>.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default RouteOptions

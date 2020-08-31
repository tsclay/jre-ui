import React, { useState } from 'react'
import { Typography, Box, Hidden } from '@material-ui/core/'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'

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
    backgroundColor: 'rgba(61, 61, 61, 0.3)',
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
    padding: theme.spacing(2),
    backgroundColor: '#E8F0FF'
  }
}))(MuiAccordionDetails)

const TechStack = (props) => {
  const { typographySpacer } = props
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <>
      <div style={{ marginTop: '2rem' }}>
        <h2>Tech Stack</h2>
        <Box style={typographySpacer}>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            square
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography style={{ marginLeft: '1em' }} component="span">
                MERN
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                The API uses a MongoDB database for JRE data and
                Node.js/Express.js to access said database. This website was
                made using React/Material-UI.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            square
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
            >
              <Typography style={{ marginLeft: '1em' }} component="span">
                PostgreSQL &amp; node-postgres
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2">
                Registered API keys are stored in a PostgreSQL database and
                accessed from the Node/Express server using the node-postgres
                package.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            square
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ marginLeft: '1em' }} component="span">
                Puppeteer &amp; Cheerio
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box>
                <Typography variant="body2" style={typographySpacer}>
                  Data for JRE-API was gathered using a combo of Puppeteer and
                  Cheerio.
                </Typography>
                <Typography variant="body2" style={typographySpacer}>
                  Puppeteer creates an automated instance of Chromium to visit
                  and gather HTML content from necessary sites.
                </Typography>
                <Typography variant="body2">
                  If your familiar with jQuery, Cheerio is essentially jQuery on
                  the server-side. This is used to scape the data from gather
                  HTML/text resources.
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Typography style={typographySpacer}>
          See the back-end code{' '}
          <a
            href="https://github.com/tsclay/JRE-API"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          . See the front-end code{' '}
          <a
            href="https://github.com/tsclay/jre-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </Typography>
      </div>
      <Hidden>
        <div id="error-reporting" style={{ height: '3rem' }} />
      </Hidden>
    </>
  )
}

export default TechStack

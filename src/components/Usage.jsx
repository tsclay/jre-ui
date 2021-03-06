/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react'
import { Box, Typography, Hidden, useMediaQuery } from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles'
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

const useStyles = makeStyles({
  inlineCode: {
    fontFamily: 'Anonymous-Pro, monospace'
  },
  getHTTP: {
    fontFamily: 'Anonymous-Pro, monospace'
  }
})

const RouteOptions = (props) => {
  const { typographySpacer } = props
  const styles = useStyles()
  const matches = useMediaQuery('(min-width:750px)')
  const [expanded, setExpanded] = useState('panel5')

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <>
      <div style={{ marginTop: '2rem' }}>
        <h2>Usage</h2>
        <Typography style={typographySpacer}>
          The base URL for the API is{' '}
          <span className="inline-code">
            <code>https://jre-api.herokuapp.com</code>
          </span>
        </Typography>
        <Typography style={typographySpacer}>
          An API Key is required to use these routes.{' '}
        </Typography>
        <Typography style={typographySpacer}>
          The way to filter episodes is by setting property:value pairs as URL
          queries:
        </Typography>
        <div className="basic-code-blocks">
          <code>
            <span style={{ display: 'block', paddingBottom: '0.25em' }}>
              date=(asc || desc)
            </span>
            <br />
            <span style={{ display: 'block', paddingBottom: '0.25em' }}>
              episodeID=(int &gt; 0 || null)
            </span>
            <br />
            <span style={{ display: 'block', paddingBottom: '0.25em' }}>
              limit=(int &gt; 0)
            </span>
            <br />
            <span style={{ display: 'block', paddingBottom: '0.25em' }}>
              isFC=(Boolean)
            </span>
            <br />
            <span style={{ display: 'block', paddingBottom: '0.25em' }}>
              isMMA=(Boolean)
            </span>
            <br />
            <span style={{ display: 'block', paddingBottom: '0.25em' }}>
              isJRQE=(Boolean)
            </span>
          </code>
        </div>
        <Typography style={typographySpacer}>
          The number of items returned is limited to 100 by default. If you need
          less than that number, specify the limit explicitly. The exception to
          this is when requesting all JRE episodes. Items are sorted by date
          descending order by default.
        </Typography>
        <Typography style={typographySpacer}>
          <strong>Important:</strong> Only specify one of the Boolean properties
          if doing so. Specifying multiple as true will return no episodes. This
          is because there are no episodes marked as part of multiple types.
        </Typography>
        <Typography style={typographySpacer}>
          Look at the following for more info on these queries:
        </Typography>
        <Accordion
          TransitionProps={{ unmountOnExit: true }}
          square
          expanded={expanded === 'panel5'}
          onChange={handleChange('panel5')}
        >
          <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <Box
              display="flex"
              flexDirection={matches ? 'row' : 'column'}
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" justifyContent="start" alignItems="start">
                <Typography component="span" className={styles.getHTTP}>
                  GET
                </Typography>{' '}
                <Typography style={{ marginLeft: '1em' }} component="span">
                  All Episodes
                </Typography>
              </Box>
              <Typography className={styles.inlineCode}>
                /api/v1/jre/all
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="body2">
              Get all episodes of the JRE Podcast, sorting by date ascending or
              descending (orders descending by default). This route is placed
              behind rate-limiting middleware.{' '}
              <em>
                Call this route efficiently because subsequent requests will
                take significantly longer to resolve.
              </em>
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
            <Box
              display="flex"
              flexDirection={matches ? 'row' : 'column'}
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" justifyContent="start" alignItems="start">
                <Typography component="span" className={styles.getHTTP}>
                  GET
                </Typography>{' '}
                <Typography style={{ marginLeft: '1em' }} component="span">
                  MMA Shows
                </Typography>
              </Box>
              <Typography className={styles.inlineCode}>
                /api/v1/jre?isMMA=true&amp;date=desc
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="body2">
              Get only the MMA Shows from the JRE podcast, and show the most
              recent ones first. To date, there are 97 episodes.
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
            <Box
              display="flex"
              flexDirection={matches ? 'row' : 'column'}
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" justifyContent="start" alignItems="start">
                <Typography component="span" className={styles.getHTTP}>
                  GET
                </Typography>{' '}
                <Typography style={{ marginLeft: '1em' }} component="span">
                  Fight Companion
                </Typography>
              </Box>
              <Typography className={styles.inlineCode}>
                /api/v1/jre?isFC=true&amp;date=desc
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="body2">
              Get only Fight Companion episodes, and show the most recent ones
              first. To date, there are 59 episodes.
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
            <Box
              display="flex"
              flexDirection={matches ? 'row' : 'column'}
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" justifyContent="start" alignItems="start">
                <Typography component="span" className={styles.getHTTP}>
                  GET
                </Typography>{' '}
                <Typography style={{ marginLeft: '1em' }} component="span">
                  Joe Rogan Questions Everyting (JRQE)
                </Typography>
              </Box>
              <Typography className={styles.inlineCode}>
                /api/v1/jre?isJRQE=true&amp;date=desc
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="body2">
              These are the 6 episodes that Joe Rogan recorded with Duncan
              Trussel as part of <em>Joe Rogan Questions Everything</em>, which
              aired on the SyFy network during summer 2013. This query will
              return only these 6 episodes.
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
            <Box
              display="flex"
              flexDirection={matches ? 'row' : 'column'}
              justifyContent="space-between"
              width="100%"
            >
              <Box display="flex" justifyContent="start" alignItems="start">
                <Typography component="span" className={styles.getHTTP}>
                  GET
                </Typography>{' '}
                <Typography style={{ marginLeft: '1em' }} component="span">
                  Out of Studio
                </Typography>
              </Box>
              <Typography className={styles.inlineCode}>
                /api/v1/jre?episodeID=null&amp;date=desc
              </Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography component="body2">
              These are the more unconventional episodes of the JRE Podcast,
              being recording in cars, hotels, paradise. You get the idea. As
              such, these episodes don&apos;t come with conventional episode
              numbers, so the episode_id property is set to null. This will
              return the 10 episodes where{' '}
              <code className="inline-code">episodeID = null</code>.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <Hidden>
        <div id="try-it" style={{ height: '3rem' }} />
      </Hidden>
    </>
  )
}

export default RouteOptions

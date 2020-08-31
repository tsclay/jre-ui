import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  footer: {
    color: '#040407',
    backgroundColor: '#ce7d47',
    textAlign: 'center',
    minHeight: '125px',
    padding: '1.15rem'
  }
})

const Footer = () => {
  const styles = useStyles()

  return (
    <Box className={styles.footer}>
      <Typography style={{ marginBottom: '0.25rem' }}>
        The JRE-API and this website was created by Tim Clay.
      </Typography>
      <Typography style={{ marginBottom: '0.25rem' }}>
        This website and the JRE-API is not affiliated with Joe Rogan and/or the
        Joe Rogan Experience Podcast.
      </Typography>
      <Typography style={{ marginBottom: '0.25rem' }}>
        All data shown here and by the JRE-API is publicly available at the
        <a
          href="http://podcasts.joerogan.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JRE Podcast website
        </a>{' '}
        and at the{' '}
        <a
          href="https://www.youtube.com/user/PowerfulJRE"
          target="_blank"
          rel="noopener noreferrer"
        >
          PowerfulJRE YouTube channel
        </a>
        .
      </Typography>
    </Box>
  )
}

export default Footer

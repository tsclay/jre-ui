import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  footer: {
    color: '#040407',
    backgroundColor: '#ce7d47',
    textAlign: 'center',
    height: '125px',
    paddingTop: '2em'
  }
})

const Footer = () => {
  const styles = useStyles()

  return (
    <Box className={styles.footer}>
      <Typography>
        The JRE-API and this website was created by Tim Clay.
      </Typography>
      <Typography>
        This website and the JRE-API is not affiliated with Joe Rogan and/or the
        Joe Rogan Experience Podcast.
      </Typography>
      <Typography>
        All data shown here and by the JRE-API is publicly available at the
        <a
          href="http://podcasts.joerogan.net/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JRE Podcast website
        </a>
{' '}
        and at the
{' '}
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

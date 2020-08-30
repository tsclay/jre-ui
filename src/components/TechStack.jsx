import React from 'react'
import Typography from '@material-ui/core/Typography'

const TechStack = (props) => {
  const { marginBottom, typographySpacer } = props
  return (
    <div style={marginBottom} id="tech-stack">
      <h2>Tech Stack</h2>
      <Typography style={typographySpacer}>
        This project involved use of the following tech:
      </Typography>
      <Typography style={typographySpacer}>
        See the back-end code
{' '}
        <a
          href="https://github.com/tsclay/JRE-API"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </Typography>
      <Typography>
        See the front-end code
{' '}
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
  )
}

export default TechStack

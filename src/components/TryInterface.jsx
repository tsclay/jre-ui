import React, { useState } from 'react'
import prettier from 'prettier/standalone'
import parserJson from 'prettier/parser-babel'
import Highlight, { defaultProps } from 'prism-react-renderer'
import styled from 'styled-components'
import theme from 'prism-react-renderer/themes/nightOwl'
import {
  Typography,
  TextField,
  Box,
  Button,
  CircularProgress,
  Hidden,
  useMediaQuery
} from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'

let prevUrl

const useStyles = makeStyles((theme) => ({
  navLinks: {
    width: '100%',
    color: '#E8F0FF',
    backgroundColor: '#3d3d3d',
    '&:hover': {
      backgroundColor: fade('#333333', 1)
    }
  }
}))

const TryInterface = (props) => {
  const matches = useMediaQuery('(min-width: 750px)')
  const buttonStyles = useStyles()
  const [episodes, setEpisodes] = useState('')
  const [input, setInput] = useState({
    url: '/api/v1/jre/example',
    apiKey: 'DemoUser'
  })
  const [isLoading, setIsLoading] = useState(false)
  const { typographySpacer } = props

  const fetchEpisodes = async (params) => {
    const { url, apiKey } = params
    await setIsLoading(true)
    const response = await fetch(`https://jre-api.herokuapp.com${url}`, {
      headers: { 'X-API-KEY': apiKey }
    })
    const data = await response.json()
    const prettiedData = await prettier
      .format(JSON.stringify(data), {
        parser: 'json',
        plugins: [parserJson],
        printWidth: 90
      })
      .trim()
    prevUrl = url
    await setEpisodes(prettiedData)
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }

  const getQueriedData = async (e) => {
    await e.preventDefault()
    await setEpisodes('')
    setTimeout(() => {
      fetchEpisodes(input)
    }, 100)
  }

  const blankTerminal = {
    display: 'flex',
    margin: '1em auto',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Anonymous Pro, monospace',
    minHeight: '240px',
    color: 'rgb(214, 222, 235)',
    backgroundColor: 'rgb(1, 22, 39)'
  }

  const Pre = matches
    ? styled.pre`
        text-align: left;
        margin: 1em auto;
        padding: 0.5em;
        overflow: scroll;
        width: 80%;
        height: 240px;
        overflow: auto;
      `
    : styled.pre`
        text-align: left;
        margin: 1em auto;
        padding: 0.5em;
        overflow: scroll;
        width: 100%;
        height: 240px;
        overflow: auto;
      `

  const Line = styled.div`
    display: table-row;
  `

  const LineNo = styled.span`
    display: table-cell;
    text-align: right;
    padding-right: 1em;
    user-select: none;
    opacity: 0.5;
  `

  const LineContent = styled.span`
    display: table-cell;
  `

  const inlineCode = {
    inlineCode: {
      color: 'rgb(0, 0, 0)',
      backgroundColor: '#c3c3c3',
      fontFamily: 'Anonymous-Pro, monospace',
      width: '45%'
    }
  }

  return (
    <>
      <div className="App" style={{ marginTop: '2rem' }}>
        <h2>Try It!</h2>
        <Typography style={typographySpacer}>
          This API requires an API Key for access. The API Key should be sent as
          a request header with property{' '}
          <Typography component="span" style={inlineCode.inlineCode}>
            X-API-KEY
          </Typography>
          {'. '}A demo key is used below; only 1 data item will be returned by
          each request with the demo key.
        </Typography>
        <Typography style={typographySpacer}>
          If you have your own key, replace the value below with yours. Request
          an API Key below to get more items returned to your requests.
        </Typography>
        <Typography style={typographySpacer}>
          <strong>Warning:</strong> You may call{' '}
          <code style={inlineCode}>/api/v1/jre/all</code>, but be prepared to
          wait. Pagination is <strong>not used</strong> in this demo, so the
          browser may become unresponsive until the data is rendered. When
          building your app, be sure to use some pagination method for this
          route.
        </Typography>
        <form
          onSubmit={getQueriedData}
          style={
            matches
              ? { width: '80%', margin: '0 auto 2rem auto' }
              : { width: '100%', margin: '0 auto 2rem auto' }
          }
        >
          <fieldset style={{ padding: '1rem' }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: '1.25rem' }}
            >
              <Typography style={{ fontFamily: 'Anonymous-Pro, monospace' }}>
                X-API-KEY
              </Typography>
              <TextField
                style={{ width: '70%' }}
                id="apiKey"
                label="X-API-KEY"
                defaultValue={input.apiKey}
                helperText="Replace with your key"
                variant="filled"
                onChange={(e) => {
                  input[e.target.id] = e.target.value
                  setInput(input)
                }}
              />
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              style={{ marginBottom: '1.25rem' }}
            >
              <Typography color="initial">Request Route</Typography>
              <TextField
                style={{ width: '70%' }}
                id="url"
                label="Request Route"
                defaultValue={input.url}
                helperText="Route with queries"
                variant="filled"
                type="text"
                onChange={(e) => {
                  input[e.target.id] = e.target.value
                  setInput(input)
                }}
              />
            </Box>
            <Button
              className={buttonStyles.navLinks}
              type="submit"
              variant="contained"
            >
              Fetch!
            </Button>
          </fieldset>
        </form>
        {episodes.length > 0 ? (
          <Highlight
            {...defaultProps}
            theme={theme}
            code={episodes}
            language="json"
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <Line key={i} {...getLineProps({ line, key: i })}>
                    <LineNo>{i + 1}</LineNo>
                    <LineContent>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </LineContent>
                  </Line>
                ))}
              </Pre>
            )}
          </Highlight>
        ) : (
          <div
            style={
              matches
                ? { ...blankTerminal, width: '80%' }
                : { ...blankTerminal, width: '100%' }
            }
          >
            {isLoading ? <CircularProgress /> : 'Awaiting your request.'}
          </div>
        )}
      </div>
      <Hidden>
        <div id="request-api-key" style={{ height: '3rem' }} />
      </Hidden>
    </>
  )
}

export default TryInterface

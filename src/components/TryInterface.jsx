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
  CircularProgress
} from '@material-ui/core'

let prevUrl

const TryInterface = (props) => {
  const [episodes, setEpisodes] = useState('')
  const [input, setInput] = useState({
    url: '/api/v1/jre/example',
    apiKey: 'DemoUser'
  })
  const [isLoading, setIsLoading] = useState(false)
  const { marginBottom, typographySpacer } = props

  const fetchEpisodes = async (params) => {
    const { url, apiKey } = params
    if (url === prevUrl) return
    await setIsLoading(true)
    const response = await fetch(url, { headers: { 'X-API-KEY': apiKey } })
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
    await fetchEpisodes(input)
  }

  const Pre = styled.pre`
    text-align: left;
    margin: 1em auto;
    padding: 0.5em;
    overflow: scroll;
    width: 75%;
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
    <div className="App" style={marginBottom} id="try-it">
      <h2>Try It!</h2>
      <Typography style={typographySpacer}>
        This API requires an API Key for access. The API Key should be sent as a
        request header with property{' '}
        <Typography component="span" style={inlineCode.inlineCode}>
          X-API-KEY
        </Typography>
        {'. '}
A demo key is used below; only 1 data item will be returned by
        each request with the demo key.
</Typography>
      <Typography style={typographySpacer}>
        If you have your own key, replace the value below with yours. Request an
        API Key below to get more items returned to your requests.
      </Typography>
      <form
        onSubmit={getQueriedData}
        style={{ width: '80%', margin: '0 auto 2em auto' }}
      >
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
          style={{ width: '100%' }}
          type="submit"
          variant="contained"
          color="primary"
        >
          Fetch!
        </Button>
      </form>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            margin: '1em auto',
            width: '75%',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Anonymous Pro, monospace',
            minHeight: '240px',
            color: 'rgb(214, 222, 235)',
            backgroundColor: 'rgb(1, 22, 39)'
          }}
        >
          <CircularProgress />
        </div>
      ) : episodes.length > 0 ? (
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
          style={{
            display: 'flex',
            width: '75%',
            margin: '1em auto',
            justifyContent: 'center',
            alignItems: 'center',
            fontFamily: 'Anonymous Pro, monospace',
            minHeight: '240px',
            color: 'rgb(214, 222, 235)',
            backgroundColor: 'rgb(1, 22, 39)'
          }}
        >
          Awaiting your request.
        </div>
      )}
    </div>
  )
}

export default TryInterface

import React, { useState } from 'react'
import {
  Button,
  Box,
  FormControl,
  Input,
  InputLabel,
  Typography,
  Collapse
} from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'

const KeyRequest = (props) => {
  const { marginBottom, typographySpacer } = props
  const formSpacing = { marginBottom: '1.15rem' }
  const [data, setData] = useState({})
  const [message, setMessage] = useState('')
  const [open, setOpen] = useState(false)

  const handleInputs = (e) => {
    data[e.target.id] = e.target.value
    setData(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email } = data
    try {
      const response = await fetch('http://localhost:5000/api/v1/requestKey', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name,
          email
        })
      })
      const confirm = await response.json()
      await setMessage(confirm.message)
    } catch (error) {
      await setMessage(
        'Unknown error. Please contact keymaster.jre.api@gmail.com.'
      )
      console.log(error)
    } finally {
      setOpen(true)
    }
  }

  return (
    <div style={marginBottom} id="request-api-key">
      <h2>Request API Key</h2>
      <Typography style={typographySpacer}>
        An API Key is required to access the /all and queried routes. You should
        receive your key by email shortly after requesting.
      </Typography>
      <Typography style={typographySpacer}>
        If you don&apos;t receive the email, please contact
        keymaster.jre.api@gmail.com for an API Key.
      </Typography>
      <form style={{ width: '50%', margin: '0 auto' }} onSubmit={handleSubmit}>
        <fieldset>
          <legend>Info</legend>
          <Box display="flex" justifyContent="start" flexDirection="column">
            <FormControl style={formSpacing}>
              <InputLabel htmlFor="input-name">Name</InputLabel>
              <Input id="name" onChange={handleInputs} />
            </FormControl>
            <FormControl style={formSpacing}>
              <InputLabel htmlFor="input-name">Email</InputLabel>
              <Input id="email" onChange={handleInputs} />
            </FormControl>
          </Box>
          <Button
            style={{ ...formSpacing, width: '100%' }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Request
          </Button>
          {message ? (
            <Collapse in={open}>
              <Alert
                severity={message.match(/key sent/gi) ? 'success' : 'error'}
                onClose={() => {
                  setOpen(false)
                }}
              >
                {message}
              </Alert>
            </Collapse>
          ) : null}
        </fieldset>
      </form>
    </div>
  )
}

export default KeyRequest

import React, { useState } from 'react'
import {
  Button,
  Box,
  FormControl,
  Input,
  InputLabel,
  Typography
} from '@material-ui/core'

const KeyRequest = (props) => {
  const { marginBottom, typographySpacer } = props
  const [data, setData] = useState({})

  const handleInputs = (e) => {
    data[e.target.id] = e.target.value
    setData(data)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('here is the form data! ', data)
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
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Info</legend>
          <Box display="flex" justifyContent="start">
            <FormControl>
              <InputLabel htmlFor="input-name">Name</InputLabel>
              <Input id="name" onChange={handleInputs} />
            </FormControl>
            <FormControl>
              <InputLabel htmlFor="input-name">Email</InputLabel>
              <Input id="email" onChange={handleInputs} />
            </FormControl>
          </Box>
          <Button type="submit" variant="contained" color="primary">
            Request
          </Button>
        </fieldset>
      </form>
    </div>
  )
}

export default KeyRequest

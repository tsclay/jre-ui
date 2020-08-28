import React, { useState } from 'react'
import {
  Button,
  Box,
  FormControl,
  FormHelperText,
  Input,
  FormLabel,
  InputLabel
} from '@material-ui/core'

const KeyRequest = (props) => {
  const { marginBottom } = props
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
    <div style={marginBottom}>
      <p>Want to interact with this API?</p>
      <p>Request an API Key below!</p>
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

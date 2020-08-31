import React, { useState } from 'react'
import {
  Button,
  Box,
  FormControl,
  Input,
  InputLabel,
  Typography,
  Collapse,
  Hidden,
  useMediaQuery
} from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import Alert from '@material-ui/lab/Alert'

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

const KeyRequest = (props) => {
  const { typographySpacer } = props
  const formSpacing = { marginBottom: '1.15rem' }
  const matches = useMediaQuery('(min-width:750px)')
  const buttonStyles = useStyles()
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
      const response = await fetch('/api/v1/requestKey', {
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
    } finally {
      setOpen(true)
    }
  }

  return (
    <>
      <div style={{ marginTop: '2rem' }}>
        <h2>Request API Key</h2>
        <Typography style={typographySpacer}>
          An API Key is required to access the /all and queried routes. You
          should receive your key by email shortly after requesting.
        </Typography>
        <Typography style={typographySpacer}>
          If you don&apos;t receive the email, please contact
          keymaster.jre.api@gmail.com for an API Key.
        </Typography>
        <form
          style={
            matches
              ? { width: '80%', margin: '0 auto' }
              : { width: '100%', margin: '0 auto' }
          }
          onSubmit={handleSubmit}
        >
          <fieldset style={{ padding: '1rem' }}>
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
              className={buttonStyles.navLinks}
              type="submit"
              variant="contained"
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
      <Hidden>
        <div id="tech-stack" style={{ height: '3rem' }} />
      </Hidden>
    </>
  )
}

export default KeyRequest

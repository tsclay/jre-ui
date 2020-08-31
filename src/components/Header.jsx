import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { makeStyles, fade } from '@material-ui/core/styles'
import { Box, Menu, MenuItem, useMediaQuery } from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#040407',
    backgroundColor: '#ce7d47'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  navLinks: {
    marginLeft: theme.spacing(2),
    backgroundColor: '#3d3d3d',
    '&:hover': {
      backgroundColor: fade('#333333', 1)
    }
  }
}))

const Header = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const matches = useMediaQuery('(min-width:750px)')

  const plainAnchor = { textDecoration: 'none', color: 'inherit' }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return matches ? (
    <AppBar
      position="fixed"
      classes={{
        root: classes.root
      }}
    >
      <Toolbar display="flex" alignItems="center">
        <Box component="h3" flexGrow={1}>
          JRE API
        </Box>
        <Button
          type="button"
          className={classes.navLinks}
          variant="contained"
          color="primary"
          href="#usage"
        >
          Usage
        </Button>
        <Button
          type="button"
          className={classes.navLinks}
          variant="contained"
          color="primary"
          href="#try-it"
        >
          Try It
        </Button>
        <Button
          type="button"
          className={classes.navLinks}
          variant="contained"
          color="primary"
          href="#request-api-key"
        >
          Request API Key
        </Button>
        <Button
          type="button"
          className={classes.navLinks}
          variant="contained"
          color="primary"
          href="#tech-stack"
        >
          Tech Stack
        </Button>
        <Button
          type="button"
          className={classes.navLinks}
          variant="contained"
          color="primary"
          href="#report-error"
        >
          Report Error
        </Button>
      </Toolbar>
    </AppBar>
  ) : (
    <AppBar
      position="fixed"
      classes={{
        root: classes.root
      }}
    >
      <Toolbar display="flex" alignItems="center">
        <Box component="h3" flexGrow={1}>
          JRE API
        </Box>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <a style={plainAnchor} href="#usage">
            <MenuItem onClick={handleClose}>Usage</MenuItem>
          </a>
          <a style={plainAnchor} href="#try-it">
            <MenuItem onClick={handleClose}> Try It</MenuItem>
          </a>
          <a style={plainAnchor} href="#request-api-key">
            <MenuItem onClick={handleClose}> Request API Key</MenuItem>
          </a>
          <a style={plainAnchor} href="#tech-stack">
            <MenuItem onClick={handleClose}> Tech Stack</MenuItem>
          </a>
          <a style={plainAnchor} href="#report-error">
            <MenuItem onClick={handleClose}> Report Error</MenuItem>
          </a>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

export default Header

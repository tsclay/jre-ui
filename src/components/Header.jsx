import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { makeStyles, fade } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import { flexbox } from '@material-ui/system'
import Box from '@material-ui/core/Box'

const useStyles = makeStyles((theme) => ({
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
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
    marginLeft: theme.spacing(2)
  }
}))

const Header = () => {
  const classes = useStyles()
  return (
    <>
      <AppBar position="fixed">
        <Toolbar display="flex">
          <Box flexGrow={1}>JRE API</Box>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <Button
            className={classes.navLinks}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Usage
          </Button>
          <Button
            className={classes.navLinks}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Request API Key
          </Button>
          <Button
            className={classes.navLinks}
            variant="contained"
            color="primary"
            href="#contained-buttons"
          >
            Report Error
          </Button>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Header

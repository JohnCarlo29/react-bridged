import clsx from 'clsx';
import { AppBar, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { useState } from 'react';
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import { Inbox, Mail, Menu } from '@material-ui/icons';
import { SIDE_NAV_MENU } from './utils/constants'

const drawerWidth = 280
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
}))

function App() {
  const classes = useStyles()
  const menus = SIDE_NAV_MENU

  const [toggleDrawer, setToggleDrawer] = useState(false)
  const handleDrawerToggle = () => {
    setToggleDrawer(!toggleDrawer)
  }

  return (
    <div className="App">
      <AppBar position="relative" className={clsx(classes.appBar, {
          [classes.appBarShift]: toggleDrawer,
        })}>
        <Toolbar>
          <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            BridgedPH
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="persistent" className={classes.drawer} open={toggleDrawer} classes={{ paper: classes.drawerPaper }}>
      <List>
          {menus.map((menu, index) => (
            <ListItem button key={`side-menu-${index}`}>
              <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
              <ListItemText primary={menu.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: toggleDrawer,
        })}
      >
        <Router>
          { renderRoutes(routes) }
        </Router>
      </main>
    </div>
  );
}

export default App;

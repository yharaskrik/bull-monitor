import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from './Drawer';
import AppBar from './AppBar';
import SettingsModal from '../components/Settings';
import RedisInfoModal from '../components/RedisInfo';
import { useCreateFirstWorkspace } from '@/hooks/use-create-first-workspace';
import { useDrawerState } from '@/stores/drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: 'calc(100% - var(--drawer-width) - 1px)',
    },
    flexGrow: 1,
    padding: theme.spacing(1),
  },
}));

const Shell: React.FC = (props) => {
  const classes = useStyles();
  useCreateFirstWorkspace();
  const drawerWidth = useDrawerState((state) => state.defaultWidth);
  const rootStyle = {
    '--drawer-width': drawerWidth + 'px',
  } as React.CSSProperties;
  return (
    <div style={rootStyle} className={classes.root}>
      <CssBaseline />
      <AppBar />
      <Drawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {props.children}
      </main>
      <SettingsModal />
      <RedisInfoModal />
    </div>
  );
};

export default Shell;
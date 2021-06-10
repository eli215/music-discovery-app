import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import songSelection from './database';
import { colors, Divider, hexToRgb, List, ListItemAvatar, ListItemIcon, Tooltip, Typography } from '@material-ui/core';
import DiscIcon from '@material-ui/icons/PlayCircleFilled';
import { createMuiTheme } from '@material-ui/core/styles';
import SpotifyImage from './Images/defaultSpotify.png';
import albumCover from './Images/lostInYourLight.jpg';

import Footer from "./Footer"
import { render } from '@testing-library/react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },

  custCol: {
    width: '50%',
    height: '760',
    backgroundColor: '#272b4d',
  },

}));

const myTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    secondary: {
      main: '#aaaaaa',
    },
  },
});

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 900,
    fontSize: theme.typography.pxToRem(16),
    border: '1px solid #dadde9',
  },
}))(Tooltip);


function renderRow(props) {
  const { index, style } = props;

  return (
    <HtmlTooltip placement='bottom-start' title={
      <React.Fragment>
        <Typography color="inherit" style={{fontSize: 18}}><b>Tags</b></Typography>
          {songSelection()[index].tags}
      </React.Fragment>}>
      <ListItem button style={style} key={index} divider={true} 
      // onClick={
      // }
      >

        <ListItemIcon>
          <DiscIcon style={{ color: '#26deb0' }} />
        </ListItemIcon>
        <ListItemText
          style={{ color: 'white' }}
          primary={songSelection()[index].name}
          secondary={<Typography color='#00aaff'>by {songSelection()[index].artist} </Typography>} />
      </ListItem>
      
    </HtmlTooltip>
    
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};


export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div class='row'>
      <div className={classes.custCol} style={{ padding: 15, margin: 0}}>
        <img src={albumCover} alt="Song" width="315" height="315" />
        <h1 style={{ color: '#26deb0', padding: 0 }}>{songSelection()[19].name}</h1>
        <p style={{ color: 'white', padding: 0  }}>by {songSelection()[19].artist}</p>
        <p style={{ color: 'white', padding: 0  }}>Tags: {songSelection()[19].tags.substring(0, 54)}</p>
        <p style={{ color: 'white', padding: 0  }}>{songSelection()[19].tags.substring(54)}</p>

      </div>
      <div className={classes.custCol}>
        <FixedSizeList height={510} width={'98.5%'} itemSize={70} itemCount={19}>
          {renderRow}
        </FixedSizeList>
        <Footer/>
      </div>
    </div>

  );
}
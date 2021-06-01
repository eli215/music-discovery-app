import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import songSelection from './database';
import { colors, Divider, hexToRgb, List, ListItemAvatar, ListItemIcon, Typography } from '@material-ui/core';
import DiscIcon from '@material-ui/icons/PlayCircleFilled';
import { createMuiTheme } from '@material-ui/core/styles';
import SpotifyImage from './Images/defaultSpotify.png';
import albumCover from './Images/lostInYourLight.jpg';
import Modal from '@material-ui/core/Modal';

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

function renderRow(props) {
  const { index, style } = props;

  return (
      <ListItem button style={style} key={index} divider={true} onClick={() => { alert("Tags: " + songSelection()[index].tags)}}>

        <ListItemIcon>
          <DiscIcon style={{ color: '#26deb0' }} />
        </ListItemIcon>
        <ListItemText
          style={{ color: 'white' }}
          primary={songSelection()[index].name}
          secondary={<Typography color='#00aaff'> {songSelection()[index].artist} </Typography>} />
      </ListItem>

    
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function VirtualizedList() {
  const classes = useStyles();

  return (
    <div class = 'row'>
      <div className={classes.custCol} style={{padding:50}}>
        <img src={albumCover} alt="Song" width="500" height="500"/>
        <h1 style={{color: '#26deb0', padding: 10}}>{songSelection()[14].name}</h1>
        <p style={{color: 'white' }}>{songSelection()[14].artist}</p>
        <p style={{color: 'white' }}>Tags: {songSelection()[14].tags}</p>

      </div>
      <div className={classes.custCol}>
        <FixedSizeList height={760} width={'98.5%'} itemSize={70} itemCount={20}>
          {renderRow}
        </FixedSizeList>
      </div>
      
    </div>

  );
}
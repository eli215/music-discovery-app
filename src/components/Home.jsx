import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, Icon } from 'semantic-ui-react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import "./Home.css"


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },

  custCol: {
    width: '50%',
    height: '100',
    backgroundColor: 'black',//'#272b4d',
  },

}));

function Home() {
  const classes = useStyles();
  
  render();
  return (
    // ?? style necessary for bg color
    <div>
      <Form />
    </div>
  );
}

class Form extends React.Component {
	render() {
  	return (
      <div className="center">
      <Input size='huge' action={
        <Button icon size='huge' as={Link} to="/listview">
          <Icon name='search'/>
        </Button>
      }
      placeholder='Enter a song/artist...' />
      </div>
    );
  }
}

export default Home;
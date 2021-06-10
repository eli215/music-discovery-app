import { render } from "@testing-library/react";
import React from "react";
import { Link, Route, Redirect } from "react-router-dom";
import { Input, Button, Icon, Form } from 'semantic-ui-react'
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
    <div style={{color: '#49bfff', padding: 80, fontFamily: 'Trebuchet MS'}}>
      <h1>I'm looking for something that sounds like...</h1>
    <div className="center">
      
    <Input size='huge' action={
      <Button icon size='huge' as={Link} to="/listview?s=Lost+In+Your+Light+by+Dua+Lipa">
        <Icon name='search'/>
      </Button>
    }
    placeholder='Enter a song/artist' />
    </div>
    </div>
  );

  // return (
  //   <div>
  //     <Form className="center" afterSubmit={() => toDashboard(true)}>
  //       <Input size='huge' action={
  //         <Button icon type="submit" size='huge' >
  //           <Icon name='search'/>
  //         </Button>
  //       }
  //       placeholder='Enter a song/artist...' />
  //     </Form>
  //   </div>
  // );
}

export default Home;
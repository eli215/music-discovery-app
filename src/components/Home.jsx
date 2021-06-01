import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import { Input, Button, Icon } from 'semantic-ui-react'
import "./Home.css"


function Home() {
  render();
  return (
    // <div class="flex-center">
      <Form />
    // </div>
  );
}

class Form extends React.Component {
	render() {
  	return (
      <div class="center">
        <Input size='big' action={
          <Button icon size='big' as={Link} to="/listview">
            <Icon name='search'/>
          </Button>
        }
       placeholder='Enter a song/artist...' />
    	</div>
    );
  }
}

export default Home;
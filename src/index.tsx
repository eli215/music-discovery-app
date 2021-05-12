import React from 'react';
import ReactDOM from 'react-dom'; // or import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ParentSize from '@vx/responsive/lib/components/ParentSize';
import Example from './Example';
import './sandbox-styles.css';

ReactDOM.render(
  <App />,
  // <React.StrictMode>  {/* StrictMode = a helper component; gives warnings that aid in development. */} 
  //   <ParentSize>{({ width, height }) => 
  //     <Example width={width} height={height} />}
  //   </ParentSize>
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
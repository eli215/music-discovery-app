import React from "react";
import ReactDOM from 'react-dom';

import ParentSize from '@vx/responsive/lib/components/ParentSize';
import Example from './GraphExample';
import './sandbox-styles.css';

function Graphview() {

    return (
        <React.StrictMode>  {/* StrictMode = a helper component; gives warnings that aid in development. */}
            <ParentSize>{({ width, height }) => 
                    <Example width={width} height={780} />
            }</ParentSize>
        </React.StrictMode>
        // ReactDOM.render(
        //     <React.StrictMode>  {/* StrictMode = a helper component; gives warnings that aid in development. */}
        //         <ParentSize>{({ width, height }) => 
        //             <Example width={width} height={height} />}
        //         </ParentSize>
        //     </React.StrictMode>,
        //     document.getElementById('root')
        // )
    );

// default code from tutorial:
//   return (
//     <div className="graphview">
//       <div class="container">
//         <div class="row align-items-center my-5">
//           <div class="col-lg-7">
//             <img
//               class="img-fluid rounded mb-4 mb-lg-0"
//               src="http://placehold.it/900x400"
//               alt=""
//             />
//           </div>
//           <div class="col-lg-5">
//             <h1 class="font-weight-light">Graphview</h1>
//             <p>
//               Lorem Ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry's standard dummy text
//               ever since the 1500s, when an unknown printer took a galley of
//               type and scrambled it to make a type specimen book.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
}

export default Graphview;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import { Provider } from "react-redux";
// import store from "./reducers/store";


ReactDOM.render(<App />, document.getElementById('root'));


// ReactDOM.render(
//     <React.StrictMode>
//   //Just like below 👇
//       <Provider store={store}>
//         <App />
//       </Provider>
  
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
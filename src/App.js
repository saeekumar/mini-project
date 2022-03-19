import React from "react";
import ReactDOM from "react-dom";
import "./App.css";


function Greeting(){
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person=()=><h2>Saee</h2>
const Message=()=><h2>Saee</h2>

ReactDOM.render(<Greeting />,document.getElementById('root'))






// function App() {
//   return (
//     <div className="App">
//       <h1>welcome</h1>
//       <Greet/>

//       {/* https://images-eu.ssl-images-amazon.com/images/I/41+grDTP2FL._AC_UL302_SR302,200_.jpg */}
//       <img
//         src=" https://images-eu.ssl-images-amazon.com/images/I/814rCOycUIL._AC_UL604_SR604,400_.jpg"
//         alt=""
//       />

//       <img
//         src="https://images-eu.ssl-images-amazon.com/images/I/81bsw6fnUiL._AC_UL604_SR604,400_.jpg"
//         alt=""
//       />
//     </div>
//   );
// }



// export  function Greet() {
//   return (
//     <div>App</div>
//   )
// }


// export default App;

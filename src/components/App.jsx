import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      {userIsRegistered? <Form matter="Login"/>: <Form matter="Register" show="true"/>}
    </div>
  );
}

export default App;

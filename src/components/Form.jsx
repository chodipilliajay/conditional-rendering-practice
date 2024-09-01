import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username"/>
      <Input type="password" placeholder="Password"/>
      {props.show && <Input type="Password" placeholder="Confirm Password"/>}
      <Button matter={props.matter}/>
    </form>
  );
}

export default Form;

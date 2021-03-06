import React from "react";

const Input = (props) => {
  const element1 =
    props.element === "input" ? (
      <input
        id={props.id}
        name={props.nam1}
        type={props.type}
        placeholder={props.placeholder}
        ref={props.valRef}
      />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} ref={props.valRef} />
    );

  const element2 =
    props.element === "editinput" ? (
      <input name={props.nam1} defaultValue={props.val1} ref={props.valRef} />
    ) : (
      <textarea
        rows={props.rows || 3}
        name={props.nam1}
        defaultValue={props.val1}
        ref={props.valRef}
      />
    );

  const whichValue = props.valueDue === "editinput" ? element2 : element1;

  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      {whichValue}
    </div>
  );
};

export default Input;

import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  
  const onChangeNameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const onBlurNameHandler = (e) => {
    setNameTouched(true);
  
    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return
    }
  };
  
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredName.trim() === "") {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true)
    console.log(enteredName);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // nameInputRef.current.value = ''; NOT IDEAL METHOD BY DIRECTING MANIPULATING DOM
    setEnteredName("");
  };
 
  const nameIsInvalid =  !nameIsValid && nameTouched;

  const formClasses = nameIsInvalid ?  "form-control invalid": "form-control"

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={onChangeNameHandler}
          onBlur={onBlurNameHandler}
          value={enteredName}
        />
        {nameIsInvalid && (
          <p className="error-text">You can not submit without name</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;

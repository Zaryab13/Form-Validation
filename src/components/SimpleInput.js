import { useState} from "react";


const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [nameIsValid, setNameIsValid] = useState(false);
  const [nameTouched, setNameTouched] = useState(false);
  
  const onChangeNameHandler = (e) => {
    setEnteredName(e.target.value);

    if (e.target.value.trim() !== "") {
      setNameIsValid(true);
    }

  };
  const onBlurNameHandler = (e) => {
    setNameTouched(true);
  
    if (enteredName.trim() === "") {
      setNameIsValid(false);
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

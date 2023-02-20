import { useState, useEffect } from "react";
import "./formInput.scss";

const FormInput = (props) => {
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const {
    label,
    errorMessage,
    formText,
    onChange,
    max,
    setNameError,
    nameError,
    ...inputProps
  } = props;

  useEffect(() => {
    if (props.defaultValue && props.defaultValue !== "") {
      setVisible(true);
    }
  }, []);

  const handleFocus = (e) => {
    setVisible(true);
    if (e.target.name === "Birthday") {
      e.target.type = "date";
    }
  };

  const handleBlur = (e) => {
    //If date input not completed, don't show
    //else show and validate
    if (e.target.name === "Birthday") {
      if (e.target.value === "") {
        e.target.type = "text";
        setVisible(false);
      } else {
        var date = new Date(e.target.value);
        var today = new Date(max);
        if (date.getFullYear() < 1940 || date > today) {
          setError(true);
        } else {
          setError(false);
        }
      }
    } else {
      if (e.target.value === "") {
        setVisible(false);
      } else if (e.target.name === "Email") {
        if (!/\S+@\S+\.\S+/.test(e.target.value)) {
          setError(true);
        } else {
          setError(false);
        }
      } else if (e.target.name === "Firstname") {
        if (!/^[A-Za-z]+$/.test(e.target.value)) {
          setNameError(true);
        } else {
          setNameError(false);
        }
      } else if (e.target.name === "Lastname") {
        if (!/^[A-Za-z]+$/.test(e.target.value)) {
          setError(true);
        } else {
          if (nameError) {
            setError(true);
          } else {
            setError(false);
          }
        }
      }
    }
  };

  return (
    <div className="normal-input">
      <div className={"input-container" + " " + props.parentname}>
        <input
          {...inputProps}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <span
          className={`floating-label ${visible ? "floating-label-active" : ""}`}
        >
          {label}
        </span>
      </div>
      {error || nameError ? (
        <span className="error-message">{errorMessage}</span>
      ) : (
        formText && <p className="word-break">{formText}</p>
      )}
    </div>
  );
};

export default FormInput;

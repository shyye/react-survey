import { useEffect } from "react";
import Checkboxes from "./Checkboxes";
import RadioButtons from "./RadioButtons";
import PropTypes from "prop-types";

export default function Form({formData, setFormData, resetFormData, handleAnswers, isEditMode, updateAnswer}) {

  useEffect(() => {
    console.log("Form data after reset:", formData);
  }, [formData]);

  const handleChange = (event) => {
    const name = event.target.name;
    let value = event.target.value;
    const type = event.target.type;  

    // If the checkbox is unticked and the value exist in the formData, remove it
    // Otherwise add value to formData
    if (type === "checkbox" && name === "spend-time") { 
      
      let spendTimeList = [...formData["spend-time"]]
      const isChecked = event.target.checked
      const size = spendTimeList.length
      const isValuePresent = spendTimeList.includes(value)

      if (!isChecked && isValuePresent && size > 0) {
        const index = spendTimeList.indexOf(value)
        spendTimeList.splice(index, 1)
      } else if (isChecked) {
        spendTimeList.push(value);
      } 
      value = spendTimeList
    }

    setFormData({
      ...formData,
      [name]: value,
    }); 
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    if (isEditMode) {
      updateAnswer(formData)
    } else {
      handleAnswers(formData)
    }
    
    // Reset form
    resetFormData()
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tell us what you think about your rubber duck!</h2>
      <div className="form__group radio">
        <h3>How do you rate your rubber duck colour?</h3>
        <RadioButtons handleChange={handleChange} colorValue={formData.color}/>
      </div>
      <div className="form__group">
        <h3>How do you like to spend time with your rubber duck</h3>
        <Checkboxes handleChange={handleChange} spendTimeList={[...formData["spend-time"]]}/>
      </div>
      <label>
        What else have you got to say about your rubber duck?
        <textarea
          name="review"
          value={formData.review}
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Put your name here (if you feel like it):
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Leave us your email pretty please??
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
        />
      </label>
      <input className="form__submit" type="submit" value="Submit Survey!" />
    </form>
  );
}

Form.propTypes = {
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  resetFormData: PropTypes.func,
  handleAnswers: PropTypes.func,
  isEditMode: PropTypes.bool,
  updateAnswer: PropTypes.object
};
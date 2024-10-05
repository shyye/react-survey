import { useState } from "react";
import Form from "./form/Form";
import AnswersList from "./AnswersList";

const initalFormData = {
  color: "",
  "spend-time": [],
  review: "",
  username: "",
  email: "",
};

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [formData, setFormData] = useState(initalFormData);
  const [answers, setAnswers] = useState([]);
  const [answersIdToEdit, setAnswerIdToEdit] = useState(-1);
  const [isEditMode, setEditMode] = useState(false)

  function resetFormData() {
    setFormData(initalFormData)
  }

  function handleAnswers(newAnswers) {
    setAnswers([...answers, newAnswers]);
  }

  function editAnswer(answerId) {
    const answerData = answers[answerId];
    setFormData(answerData)
    setAnswerIdToEdit(answerId)   // Could be refactored to avoid id as parameter
    setEditMode(true)
  }

  function updateAnswer(formData) {
    const newArray = answers.map((answer, i) => {
      if (i === answersIdToEdit) {
        // Replace with updated form data
        return formData;
      } else {
        // Otherwise return old answer
        return answer;
      }
    });
    setAnswers(newArray);
  }

  function deleteAnswer(answerId) {
    setAnswers(
      answers.filter((answer, i) =>
        i !== answerId
      )
    );
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers} editAnswer={editAnswer} deleteAnswer={deleteAnswer} />
      </section>
      <section className="survey__form">
        <Form
          formData={formData}
          resetFormData={resetFormData}
          setFormData={setFormData}
          handleAnswers={handleAnswers}
          isEditMode={isEditMode}
          updateAnswer={updateAnswer}
        />
      </section>
    </main>
  );
}

export default Survey;

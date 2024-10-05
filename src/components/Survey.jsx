import { useState } from "react";
import Form from "./form/Form"
import AnswersList from "./AnswersList"

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state

  const [answers, setAnswers] = useState([])

  function handleAnswers(newAnswers) {
    setAnswers([...answers, newAnswers])    
  }

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answers}/>
      </section>
      <section className="survey__form">
        <Form handleAnswers={handleAnswers}/>
      </section>
    </main>
  );
}

export default Survey;

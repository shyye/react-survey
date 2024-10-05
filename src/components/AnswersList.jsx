import AnswersItem from "./AnswersItem";

export default function AnswersList(props) {
  console.log("Inside AnswersList: ", props);

  const { answersList, editAnswer, deleteAnswer } = props;

  return (
    <ul>
      {answersList.map((answerItem, i) => (
        <AnswersItem
          answerItem={answerItem}
          key={i}
          editAnswer={editAnswer}
          deleteAnswer={deleteAnswer}
          answerId={i}
        />
      ))}
    </ul>
  );
}

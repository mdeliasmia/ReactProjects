import { useLocation, useParams } from 'react-router-dom';
import Analysis from '../Analysis';
import Summary from '../Summary';
import useAnswers from '../../hooks/useAnswers';
import _ from 'lodash';
export default function Result() {
  const { id } = useParams();
  const { state } = useLocation();
  // console.log(state);
  const { qna } = state;
  // console.log(qna);

  const { loading, error, answers } = useAnswers(id);
  // console.log(answers);

  function calculate() {
    let scor = 0;
    answers.forEach((question, index1) => {
      let correctIndexes = [];
      let checkedIndexes = [];

      question.options.forEach((option, index2) => {
        if (option.correct) correctIndexes.push(index2);

        if (qna[index1].options[index2].checked) {
          checkedIndexes.push(index2);
          option.checked = true;
        }
      });
      if (_.isEqual(correctIndexes, checkedIndexes)) {
        scor = scor + 5;
      }
    });

    return scor;
  }

  const userScore = calculate();
  return (
    <div>
      {loading && <div>Loading.......</div>}
      {error && <div>There was an Erro!</div>}
      {answers && answers.length > 0 && (
        <div>
          <Summary score={userScore} noq={answers.length} />
          <Analysis answers={answers} />
        </div>
      )}
    </div>
  );
}
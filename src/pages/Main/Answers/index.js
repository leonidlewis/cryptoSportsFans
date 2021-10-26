import React from 'react';
import AnswerList from '../../../component/AnswerList';
import {answerList} from '../../../mockup';
import '../../../styles/answer.scss';
const Answers = () => {
  return (
    <div className="answers">
      <div className="answer-list">
        {answerList.map((item, index) => {
          return (
            <AnswerList
              title={item.title}
              content={item.content}
              key={`index-${index}`}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Answers;

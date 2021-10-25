import React from 'react';
import FaqList from '../../../component/FaqList';
import {faqList} from '../../../mockup';
import '../../../styles/answer.scss';
const Answers = () => {
  return (
    <div className="answers">
      <div className="faq-list">
        {faqList.map((item, index) => {
          return (
            <FaqList
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

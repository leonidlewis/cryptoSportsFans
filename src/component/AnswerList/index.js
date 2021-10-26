import { useState } from 'react';
import collapeIn from '../../assets/images/arrow-up.png';
import collapeOut from '../../assets/images/arrow-down.png';

const AnswerList = ({title, content}) => {
  const [isShow, setIsShow] = useState(false)
  const handleShow = () => {
    setIsShow(!isShow)
  }
  return (
    <>
      <div className="answer-container">
        <div className="answer-header">
          <p>{title}</p>
          <button type="button" onClick={handleShow}>
            {isShow ? (
              <img src={collapeIn} alt="show content" />
            ) : (
              <img src={collapeOut} alt="show content" />
            )}
          </button>
        </div>
        {isShow && (
          <div className="answer-content">
            <p>{content}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default AnswerList

import FaqList from "../../../component/FaqList";
import { faqList } from "../../../mockup";
import "../../../styles/faq.scss";

const FAQ = () => {
  return (
    <div className="faq">
      <h1>FAQ</h1>
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
export default FAQ;

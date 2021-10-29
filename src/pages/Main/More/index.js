import kidImage from "../../../assets/images/kid.png";

const More = () => {
  return (
    <div className="answer-more">
      <h3>But wait, there's more!</h3>
      <p>
        Once the first generation has sold out, we plan to unlock a feature to
        allow CryptoSportsFan couples to have <em> CryptoSportsFan kids </em> at
        no additional cost.<em> Free NFTs! </em>
      </p>
      <img src={kidImage} className="kid-image" alt="left logo" />
      {/* <div className="answer-more-kid">CryptoSportsFan KID</div> */}
      <p>
        Having a CryptoSportsFan grants you 100% creative and commercial rights.
        You own it, so you can use it as your social media avatar or do anything
        you’d like with it!
      </p>
    </div>
  );
};
export default More;

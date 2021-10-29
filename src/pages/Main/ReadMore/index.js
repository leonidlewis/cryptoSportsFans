import React from "react";
import { readmore, nfts } from "../../../mockup";
import NftContainer from "../../../component/NftContainer";
import giftVideo from '../../../assets/video/gift.mp4';
import "../../../styles/readmore.scss";
const ReadMore = () => {
  return (
    <div className="read-more">
      <div className="read-more-description">
        <h1>{readmore.title}</h1>
        <p>{readmore.content}</p>
        <video className="gift-video" autoPlay loop>
        {/* https://drive.google.com/file/d/1GPtd_-r0Cipixofkc6L0uigsC-nd9g5T/view */}
          <source src={giftVideo} type="video/mp4"/>
        </video>
      </div>
      <div className="read-more-images">
        {nfts.map((item, index) => {
          return <NftContainer item={item} key={`${index}-nft`} />;
        })}
      </div>
    </div>
  );
};
export default ReadMore;

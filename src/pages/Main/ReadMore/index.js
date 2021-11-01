import React from "react";
import { readmore, nfts } from "../../../mockup";
import NftContainer from "../../../component/NftContainer";
import "../../../styles/readmore.scss";

const ReadMore = () => {
  return (
    <div className="read-more">
      <div className="read-more-description">
        <h1>{readmore.title}</h1>
        <p>{readmore.content}</p>
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

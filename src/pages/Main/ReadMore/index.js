import React from "react";
import { readmore, nfts } from "../../../mockup";
import NftContainer from "../../../component/NftContainer";
import Menu from "../../../component/Menu";
import "../../../styles/readmore.scss";
const ReadMore = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("clcik----", isMenuOpen);
  };
  return (
    <div className="read-more">
      <Menu isMenuOpen={isMenuOpen} handleMenu={handleMenu} />
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

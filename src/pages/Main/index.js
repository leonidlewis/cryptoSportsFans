import React from "react";
import MainContent from "./MainContent";
import ReadMore from "./ReadMore";
import Cities from "./Cities";
import Answers from "./Answers";
import More from "./More";
import Mint from "./Mint";
import Utility from "./Utility";
import Burning from "./Burning";
import FAQ from "./FAQ";
import Footer from "./Footer";
const Main = () => {
  return (
    <>
      <MainContent />
      <div className="gradient-bg" />
      <ReadMore />
      <div className="gradient-bg-reverse" />
      <Cities />
      <div className="gradient-bg" />
      <Answers />
      <More />
      <Mint />
      <Utility />
      <Burning />
      <FAQ />
      <Footer />
    </>
  );
};
export default Main;

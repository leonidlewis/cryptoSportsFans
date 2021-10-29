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
      <div className="gradient-bg-reverse" />
      <Mint />
      <div className="gradient-bg" />
      <Utility />
      <div className="gradient-bg-reverse" />
      <Burning />
      <div className="gradient-bg" />
      <FAQ />
    </>
  );
};
export default Main;

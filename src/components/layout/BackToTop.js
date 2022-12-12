import React from "react";

const BackToTop = () => {
  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div id="back-to-top">
      <button onClick={() => backToTop()}>
        <i className="fa-solid fa-circle-up"></i>
      </button>
    </div>
  );
};

export default BackToTop;

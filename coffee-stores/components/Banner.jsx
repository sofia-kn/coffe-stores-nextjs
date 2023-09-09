import React from "react";

function Banner(props) {
  return (
    <div className="container">
      <h1 className=" font-extrabold tracking-tight text-5xl  mb-10">
        <span className="text-white-span ">Coffee </span>
        <span className="text-purple-main block xl:inline">Connoisseur</span>
      </h1>
      <p className="mt-3 text-2xl text-white-main">
        Discover your local coffee shops!
      </p>
      <div className="mt-5">
        <button
          className="
        bg-purple-dark
        text-white-main
        pt-4
        pb-4
        pr-10
        pl-10
        text-lg 
        hover:bg-purple-main
         "
          onClick={props.handleOnClick}
        >
          {props.buttonText}
        </button>
      </div>
    </div>
  );
}

export default Banner;

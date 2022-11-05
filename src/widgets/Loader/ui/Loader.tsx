import React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import "./Loader.scss";

export const Loader = () => {
  return (
    <div className={classNames("loader", {}, [])}>
      <div className="lds-default">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

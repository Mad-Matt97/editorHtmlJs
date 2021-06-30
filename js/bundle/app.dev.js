"use strict";

const text = document.querySelector("#textarea");
const view = document.querySelector("#view");

const update = () => {
  view.srcdoc = text.value;
  console.log(text.value);
};
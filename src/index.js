import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Static_part from './components/Static_part';
import reportWebVitals from './reportWebVitals';

// Scroll Top

const $ = document;
let calcScrollValue = () => {
  let scrollProgress = $.querySelector(".progress");
  let pos = $.documentElement.scrollTop;
  let calcHeight =
    $.documentElement.scrollHeight -
    $.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    $.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#654efe ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// End Scroll Top



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Static_part />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

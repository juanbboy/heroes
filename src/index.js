import React from 'react';
import ReactDOM from 'react-dom';
import HeroesApp from './HeroesApp';
import './index.css';


// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('./service-worker.js')
//     .then(registration => {
//       console.log('Service Worker registered with scope:', registration.scope);
//     })
//     .catch(error => {
//       console.error('Service Worker registration failed:', error);
//     });
// }

ReactDOM.render(
  <HeroesApp />,
  document.getElementById('root')
);
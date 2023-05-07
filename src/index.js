import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <meta property="og:title" content="Ivan Cheng" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://ivanccheng.github.io/web/" />
    <meta property="og:image" content={require('./assets/' + 'android-chrome-512x512.png')} />
    <div className='root'>
      <App />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

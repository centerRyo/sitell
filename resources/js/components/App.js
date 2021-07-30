import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <a href=""><img src="/img/logo3.png" /></a>
      </h1>
    </header>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

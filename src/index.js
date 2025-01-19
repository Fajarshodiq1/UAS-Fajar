import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./components/Login";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const RootComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <React.StrictMode>
      {isLoggedIn ? (
        <Provider store={store}>
          <App />
        </Provider>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </React.StrictMode>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

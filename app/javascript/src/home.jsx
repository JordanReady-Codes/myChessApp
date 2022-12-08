import React from "react";
import ReactDOM from "react-dom";

import './home.scss';

class Home extends React.Component {

    componentDidMount() {
        console.log("Hello World from React");
    }




  render() {
    return (
      <div className="home">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

document.addEventListener("DOMContentLoaded", () => {
    ReactDOM.render(
        <Home />,
        document.body.appendChild(document.createElement("div"))
    );
    }
);

import React, { Component } from "react";

export default class Glasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urlImg: "./images/g1.jpg",
    };
  }

  changeColorCar = (urlImg) => {
    this.setState({
      urlImg,
    });
  };

  render() {
    const { urlImg } = this.state;
    return (
      <div className=" glasses">
        <button
          onClick={() => {
            console.log("askjdhask");
          }}
        >
          {" "}
          <img src="./images/g1.jpg" />
        </button>
        <button
          onClick={() => {
            this.changeColorCar("./images/g2.jpg");
          }}
        >
          <img src="./images/g2.jpg" />
        </button>
        <button>
          <img src="./images/g3.jpg" />
        </button>
        <button>
          {" "}
          <img src="./images/g4.jpg" />
        </button>
        <button>
          {" "}
          <img src="./images/g5.jpg" />
        </button>
        <button>
          {" "}
          <img src="./images/g6.jpg" />
        </button>
        <button>
          {" "}
          <img src="./images/g7.jpg" />
        </button>
        <button>
          {" "}
          <img src="./images/g8.jpg" />
        </button>
        <button>
          <img src="./images/g9.jpg" />
        </button>
      </div>
    );
  }
}

import React, { Component } from "react";

export class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    imgSrc: "http://i.imgflip.com/1bij.jpg",
    allMemeImgs: []
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const rand = Math.floor(
      Math.random() * Math.floor(this.state.allMemeImgs.length - 1)
    );

    this.setState({
      imgSrc: this.state.allMemeImgs[rand].url
    });
  };

  componentWillMount = async () => {
    try {
      const response = await fetch("https://api.imgflip.com/get_memes");
      if (!response.ok) throw new Error(response.statusText);
      const json = await response.json();
      this.setState({
        allMemeImgs: json.data.memes
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />
          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={this.state.imgSrc} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>
    );
  }
}

export default MemeGenerator;

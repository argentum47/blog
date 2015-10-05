import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {
      imageUrl: null
    }
  },

  componentDidMount: function() {
    let {width, height, user} = this.props;
    var canvas = document.createElement("canvas");
    canvas.width = +width;
    canvas.height = +height;
    var ctx = canvas.getContext('2d');
    ctx.rect(0, 0, width, height)
    ctx.fillStyle="#1a1a1a";
    ctx.fill()
    ctx.font = "bold " + (width/10 + 2) + "px monospace";

    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    ctx.fillStyle = "white";
    ctx.fillText("argentum", width/2, (width/2 - (width/10 - 2)));
    ctx.font = (width/10 - 2) + "px monospace";
    ctx.fillText("amitava ghosh", width/2, (width/2 + width/10));

    console.log(canvas, canvas.toDataURL())
    this.setState({ imageUrl: canvas.toDataURL()})
  },

  render: function() {
    if(!this.state.imageUrl)
      return <span>loading..</span>;
    return <img className="user-image" width="200" height="200" src={this.state.imageUrl} />;
  }
});

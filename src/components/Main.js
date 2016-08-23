require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

let imageDatas = require("../data/imageDatas.json")

imageDatas = (function genImageURL(imageDatasArr) {
  for (var i = 0; i < imageDatasArr.length; i++) {
    let singleImageData = imageDatasArr[i];
    singleImageData.imageURL = require('../images/' + singleImageData.fileName);
    imageDatasArr[i] = singleImageData;
  }
  return imageDatasArr;
})(imageDatas);

let ImgFigure = React.createClass({
  render: function () {
    return(
      <figure>
        <img src="" alt=""/>
        <figcaption>
          <h2>
          </h2>
        </figcaption>
      </figure>
    )
  }
})

class AppComponent extends React.Component {
  render() {
    return (
      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator"/>
      //   <div className="notice">Please edit <code>src/components/Main.js</code> to get started!</div>
      // </div>
      <section className="stage">
        <section className="img-sec">Hello</section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;

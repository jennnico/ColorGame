import React from 'react';
import ReactDOM from 'react-dom';

//Generate a random color and inject into Square component
var colors = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple'
  ];
var index = Math.floor(Math.random() * colors.length);
var color = colors[index];
var divStyle = {
  backgroundColor: color
};


//Color WORDS
class Color extends React.Component{
  render(){
    return(
    <div className = "color">
     {this.props.children}   
    </div>
    );
  }
}

//Color BOX
class Square extends React.Component{
  render(){
    return(
    <div
      className = "square"
       style={divStyle}>
    </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Square></Square>
    <Color>red</Color>
    <Color>orange</Color>
    <Color>yellow</Color>
    <Color>green</Color>
    <Color>blue</Color>
    <Color>purple</Color>
  </div>, document.getElementById('root'));

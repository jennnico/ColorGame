//import React from 'react';
//import ReactDOM from 'react-dom';
//resources: https://www.youtube.com/watch?v=p4fHSJ3iryo

class Square extends React.Component{
  constructor(){
    super();
    this.state = {backgroundColor: randomColor()};
  }
  
  handleClick (){
    this.setState({ backgroundColor: randomColor() });
  }
  
  //check if color and word match... not working. Trying to access the children or the id of the "color" div rendered below.
  //I have tried: this.props.id, this.props.children, id, and this.id
 checkMatch(){
  if('red' === this.state.backgroundColor){
    alert("Correct! It is red.")
  }else if('orange' === this.state.backgroundColor){
    alert("Correct! It is orange.")
  }else if('yellow' === this.state.backgroundColor){
    alert("Correct! It is yellow.")
  }else if('green' === this.state.backgroundColor){
    alert("Correct! It is green.")
  }else if('blue' === this.state.backgroundColor){
    alert("Correct! It is blue.")
  }else if('purple' === this.state.backgroundColor){
    alert("Correct! It is purple.")
  }else{
    alert("Try again!")
  }
   console.log(this.props.children) //undefined
   console.log(this.state.backgroundColor)
 }
  
  render(){
    return(
      <div>
    <div 
      //Color Square. User gets a new color when they click.
      className = "square"
      style={{backgroundColor: this.state.backgroundColor}}
      //onClick={this.handleClick}> //this one doesn't work. Not sure why.
      onClick={() => this.handleClick()}>Click for a New Color!</div>
        <div className = "color" id = 'red' onClick={() => this.checkMatch()}>red</div>
        <div className = "color" id = 'orange' onClick={() => this.checkMatch()}>orange</div>
        <div className = "color" id = 'yellow' onClick={() => this.checkMatch()}>yellow</div>
        <div className = "color" id = 'green' onClick={() => this.checkMatch()}>green</div>
        <div className = "color" id = 'blue' onClick={() => this.checkMatch()}>blue</div>
        <div className = "color" id = 'purple' onClick={() => this.checkMatch()}>purple</div>
        </div>
    );
  }
}

 function randomColor(){
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  var index = Math.floor(Math.random() * colors.length);
  var color = colors[index];
  var divStyle = {backgroundColor: color}
return color
}

ReactDOM.render(
  <div>
    <Square></Square>
  </div>, document.getElementById('root'))


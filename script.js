//import React from 'react';
//import ReactDOM from 'react-dom';
//resources: https://www.youtube.com/watch?v=p4fHSJ3iryo


class Square extends React.Component{
  //set the background color
  constructor(){
    super();
    this.state = {backgroundColor: randomColor()};
  }
  
  //change the background color when you click
  handleClick (){
    this.setState({ backgroundColor: randomColor() });
  }
  
  //check if color and word match... works, but not very elegant
 checkMatch(color){
  if(color === this.state.backgroundColor){
    alert("Correct!")
 /* }else if('orange' === this.state.backgroundColor){
    alert("Correct! It is orange.")
  }else if('yellow' === this.state.backgroundColor){
    alert("Correct! It is yellow.")
  }else if('green' === this.state.backgroundColor){
    alert("Correct! It is green.")
  }else if('blue' === this.state.backgroundColor){
    alert("Correct! It is blue.")
  }else if('purple' === this.state.backgroundColor){
    alert("Correct! It is purple.")*/
  }else{
    alert("Try again!")
  }
   console.log(color) //undefined
   console.log(this.state.backgroundColor)
 }
 
  //more elegant checkMatch, but I haven't gotten it to work
  /*
checkMatch (color){
var colorMatch = ["red", "orange", "yellow", "green", "blue", "purple"];  
for(let i = 0; i < colorMatch.length; i++ ){
  if(colorMatch[i] === this.state.backgroundColor &&  color === colorMatch[i]){
    alert(`Correct! It is ${colorMatch[i]}.`);
    return;
  }
  alert("Try again!");
  console.log(color);
  console.log(colorMatch[i]);
}
}*/
  
  render(){
    return(
      <div>
    <div 
      //Color Square. User gets a new color when they click.
      className = "square"
      style={{backgroundColor: this.state.backgroundColor}}
      //onClick={this.handleClick}> //this one doesn't work. Not sure why.
      onClick={() => this.handleClick()}>Click for a New Color!</div>
        <div className = "color" id = 'red' onClick={() => this.checkMatch('red')}>red</div>
        <div className = "color" id = 'orange' onClick={() => this.checkMatch('orange')}>orange</div>
        <div className = "color" id = 'yellow' onClick={() => this.checkMatch('yellow')}>yellow</div>
        <div className = "color" id = 'green' onClick={() => this.checkMatch('green')}>green</div>
        <div className = "color" id = 'blue' onClick={() => this.checkMatch('blue')}>blue</div>
        <div className = "color" id = 'purple' onClick={() => this.checkMatch('purple')}>purple</div>
        </div>
    );
  }
}

//return a random color
 function randomColor(){
  var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  var index = Math.floor(Math.random() * colors.length);
  var color = colors[index];
return color
}

ReactDOM.render(
  <div>
    <Square></Square>
  </div>, document.getElementById('root'))


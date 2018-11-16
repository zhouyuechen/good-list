import React from "react";
import {observable, action, computed, autorun} from 'mobx';
import calculateWinner from "../../../common.js";
class Square extends React.Component {


render() {
return (
<button className="square"
onClick={this.props.onClick}
>
{this.props.val}
</button>
)
}
}

class Board extends React.Component {
constructor(props) {
      super(props);
      this.state={
          squares:Array(9).fill(null),
          isX:false
      }
      
  }
handleClick(i){
let newarr=this.state.squares.slice();
let is=this.state.isX;

if(this.state.squares[i]!=null){

return}
newarr[i]=is?"X":"O";
this.setState({
 isX:!is,
squares:newarr
},function(){
  if(calculateWinner(this.state.squares)){

    alert(
    `胜利者是${calculateWinner(this.state.squares)}
    点击确定重开一把 `)
    this.setState({
     
    squares:Array(9).fill(null)
    });
    }
});

}
componentDidUpdate() {

}

renderSquare(i) {//创建方格的函数
return (
<Square
 val= {this.state.squares[i]} 
onClick={() => this.handleClick(i)}    />
)}
render(){
let is=this.state.isX;
let bb=is?"X":"O";
const status = `Next player: ${bb}`;
return (
<div>
<div className="status">{status}</div>
<div className="board-row">
{this.renderSquare(0)}
{this.renderSquare(1)}
{this.renderSquare(2)}
</div>
<div className="board-row">
{this.renderSquare(3)}
{this.renderSquare(4)}
{this.renderSquare(5)}
</div>
<div className="board-row">
{this.renderSquare(6)}
{this.renderSquare(7)}
{this.renderSquare(8)}
</div>
</div>
);
}
}

class Game extends React.Component {

constructor(props) {
super(props);
this.state={
  history:[]
}
this.addHistory=this.addHistory.bind(this)
}

addHistory(arr){
let last =this.state.history;
let now=last.concat(arr);
this.setState({
  history:now
})
}
render(){
return (
<div className="game">
<div className="game-board">
<Board   history={this.state.history} />
</div>
<div className="game-info">
<div>{/* status */}</div>
<ol>{/* TODO */}</ol>
</div>
</div>
);
}
}

// ========================================

export default Game;
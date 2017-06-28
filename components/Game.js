const React = require('react');
const Board = require('./Board');
const Status = require('./Status');
const solutions = require('./solutions');

class Game extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      board: [ null, null, null, null, null, null, null, null, null ],
      turn: 'X'
    };

    this.handleReset = this.handleReset.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleReset (ev) {
    ev.preventDefault();
    this.setState({
      board: [ null, null, null, null, null, null, null, null, null ],
      turn: 'X'
    })
  }

  handleClick (i, ev) {
    ev.preventDefault();
    let board = this.state.board
    board[i] = this.state.turn
    this.setState({
      board: board,
      turn: this.state.turn === 'X' ? 'O' : 'X'
    })
  }

  getWinner () {
    let board = this.state.board
    let winner = solutions.find(sol =>
      (sol.every((pos, index) => board[pos] === 'X') ||
      sol.every((pos, index) => board[pos] === 'O'))
    )
    if (winner) return board[winner[0]]
  }

  isComplete () {
    return (this.getWinner() || (this.state.board.indexOf(null) === -1))
  }

  render () {
    return (
      <div className='game'>
        <Board board={this.state.board} onClick={this.handleClick}/>
        { this.isComplete() ? <Status winner={this.getWinner()}/> : ''}
        <button className='game__reset' onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}

module.exports = Game;

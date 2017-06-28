const React = require('react');
const Field = require('./Field');

class Board extends React.Component {
  render () {
    const { board, onClick } = this.props;
    return (
      <div className='board'>
      	{ board.map((field, index) => <Field key={index} player={field} onClick={onClick.bind(null, index)}/>) }
      </div>
    );
  }
}

module.exports = Board;

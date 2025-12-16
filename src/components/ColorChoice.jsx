import PropTypes from 'prop-types';
const ColorChoice = (choice) => {
  const heart = props.liked ? '❤️' : '🤍';
  return (
    <div className >
        <h1>{local}'s color</h1>
        <button className='btn rouge'>🔴</button>
        <button className='btn orange'>🟠</button>
        <button className='btn jaune'>🟡</button>
        <button className='btn vert'>🟢</button>
        <button className='btn bleu'>🔵</button>
        <button className='btn violet'>🟣</button>
    </div>
  );
};

ColorChoice.prototype = {
  color: PropTypes.string.isRequired,
}

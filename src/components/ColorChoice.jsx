import PropTypes from 'prop-types';
const ColorChoice = (sender) => {
  return (
    <div className >
        <h1 className={sender}>{sender}'s color</h1>
        <button className='btn rouge' >🔴</button>
        <button className='btn orange'>🟠</button>
        <button className='btn jaune'>🟡</button>
        <button className='btn vert'>🟢</button>
        <button className='btn bleu'>🔵</button>
        <button className='btn violet'>🟣</button>
    </div>
  );
};

ColorChoice.prototype = {
  sender: PropTypes.string.isRequired,
};

export default ColorChoice;
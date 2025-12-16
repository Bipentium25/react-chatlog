import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({ id, sender, body, timeStamp, liked, toggleLike = () => {}, isLocal = false }) => {
  const heart = liked ? '❤️' : '🤍';
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className={`chat-entry ${isLocal ? 'local' : 'remote'}`}>
      <h2 className='entry-name'>{sender}</h2>
      <section className='entry-bubble'>
        <p>{body}</p>
        <p className='entry-time'><TimeStamp time={timeStamp}></TimeStamp></p>
        <button className='like' onClick={() => toggleLike(id)}>{heart}</button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number.isRequired,
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  toggleLike: PropTypes.func.isRequired,
  isLocal: PropTypes.bool,

};

export default ChatEntry;

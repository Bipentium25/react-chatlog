import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const heart = props.liked ? '❤️' : '🤍';
  return (
    // Replace the outer tag name with a semantic element that fits our use case
    <div className={`chat-entry ${props.isLocal ? 'local' : 'remote'}`}>
      <h2 className='entry-name'>{props.sender}</h2>
      <section className='entry-bubble'>
        <p>{props.body}</p>
        <p className='entry-time'><TimeStamp time={props.timeStamp}></TimeStamp></p>
        <button className='like' onClick={() => props.toggleLike(props.id)}>{heart}</button>
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
};

export default ChatEntry;

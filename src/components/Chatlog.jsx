import ChatEntry from './ChatEntry';
import './ChatLog.css';
import PropTypes from 'prop-types';

const ChatLog = ({entries, toggleLike,local}) => {
  const chatlogFromData = entries.map(chatEntry => {
    return(
      <ul key={chatEntry.id}>
        <ChatEntry
          id = {chatEntry.id}
          sender = {chatEntry.sender}
          body = {chatEntry.body}
          timeStamp = {chatEntry.timeStamp}
          liked = {chatEntry.liked}
          toggleLike={toggleLike}
          isLocal={chatEntry.sender === local}>
        </ChatEntry>
      </ul>
    );
  });
  return(
    <ul className="chatlog">
      {chatlogFromData}
    </ul>
  );
};
ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
      liked: PropTypes.bool.isRequired,
    })
  ).isRequired,

  toggleLike: PropTypes.func.isRequired,
  local: PropTypes.string.isRequired,
};

export default ChatLog;
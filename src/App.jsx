import './App.css';
import chatdata from './data/messages.json';
import { useState } from 'react';
import ChatLog from './components/Chatlog';
//import ChatEntry from './components/ChatEntry';


const App = () => {
  const [chatData, setChats] = useState(chatdata);
  const toggleLike = (id) => {
    setChats(chatData =>
      chatData.map(chat =>{
        if (chat.id === id) {
          return{ ...chat, liked: !chat.liked };
        } else {
          return chat;
        }
      }
      )
    );
  };

  const totalLikes = () => {
    return chatData.reduce((count, chat) => {
      return chat.liked ? count + 1 : count;
    }, 0);
  };

  const local = chatData[0].sender;
  const remote = chatData.find(chat => chat.sender !== local).sender;

  return (
    <div id="App">
      <header>
        <h1>Chat Between {local} and {remote}</h1>
        <section><h2 className='widget'>{totalLikes()} ❤️s</h2></section>
      </header>
      <main>
        <ChatLog entries={chatData} toggleLike={toggleLike} local={local}/>
      </main>
    </div>
  );
};

export default App;

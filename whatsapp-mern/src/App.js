// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import { useEffect,useState } from 'react';
import Pusher from "pusher-js"
import axios from './axios';

function App() {
const [messages,setMessages]=useState([]);
  useEffect(()=>{
    axios.get("/messages/sync").then((response)=>{
      setMessages(response.data)
    })
  },[])
useEffect(()=>{
  const pusher = new Pusher('a0c1cbe92436a841dfb2', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', function(data) {
    alert(JSON.stringify(data));
    setMessages([...messages,data])
  });

  return()=>{
    channel.unbind_all();
    channel.unsubscribe()}
  
},[messages])
  console.log(messages,setMessages)
  
  return (
    <div className="App">
   
<div className='app_body'>


   {/* {sidebar component} */}
   {/* <h1>lets build a MERN Whatsapp</h1> */}
<Sidebar/>
   {/* {chat component} */}
<Chat messages={messages}/>
</div>
    </div>
  );
}

export default App;

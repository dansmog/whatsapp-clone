import React, { Component }     from 'react';
import ChatList                 from './components/containers/ChatList';
import View                     from './components/containers/View';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [
        {
          "id": 1,
          "profilePhoto" : "http://www.joshfinnie.com/assets/images/josh-tm.jpeg",
          "name": "Gbenga",
          "lastMessage": "Bro smart: what i think this should be...",
          "chats": [
            {
              "activeUser" : "i will come to school soon",
              "receiver":  "i will be there too.. just give me few minutes"
            }
          ]
        },
        {
          "id": 2,
          "profilePhoto" : "http://loremflickr.com/g/320/240/paris",
          "name": "Tayo",
          "lastMessage": "Bro smart: what i think this should be...",
          "chats": [
            {
              "activeUser" : "i will come to school soon",
              "receiver":  "i will be there too.. just give me few minutes"
            }
          ]
        },
        {
          "id": 3,
          "profilePhoto" : "https://s.yimg.com/pw/images/buddyicon11_r.png#76029035@N02",
          "name": "uno",
          "lastMessage": "Bro smart: what i think this should be...",
          "chats": [
            {
              "activeUser" : "i will come to school soon",
              "receiver":  "i will be there too.. just give me few minutes"
            }
          ]
        },
        {
          "id": 4,
          "profilePhoto" : "http://loremflickr.com/320/240/business",
          "name": "snapshop",
          "lastMessage": "Bro smart: what i think this should be...",
          "chats": [
            {
              "activeUser" : "i will come to school soon",
              "receiver":  "i will be there too.. just give me few minutes"
            }
          ]
        },
        {
          "id": 5,
          "profilePhoto" : "http://loremflickr.com/320/240/computers",
          "name": "Taiwo jide",
          "lastMessage": "Bro smart: what i think this should be...",
          "chats": [
            {
              "activeUser" : "i will come to school soon",
              "receiver":  "i will be there too.. just give me few minutes"
            }
          ]
        },
        {
          "id": 6,
          "profilePhoto" : "http://loremflickr.com/320/240",
          "name": "Daniel anthony",
          "lastMessage": "Bro smart: what i think this should be...",
          "chats": [
            {
              "activeUser" : "i will come to school soon",
              "receiver":  "i will be there too.. just give me few minutes"
            }
          ]
        },
        {
          "id": 7,
          "profilePhoto" : "http://www.joshfinnie.com/assets/images/josh-tm.jpeg",
          "name": "Diagram",
          "lastMessage": "Bro smart: what i think this should be...",
          "chats": [
            {
              "activeUser" : "i will come to school soon",
              "receiver":  "i will be there too.. just give me few minutes"
            }
          ]
        },
        {
          "id": 8,
          "profilePhoto" : "http://www.joshfinnie.com/assets/images/josh-tm.jpeg",
          "name": "Noob2Hackers",
          "lastMessage": "Bro smart: what i think this should be...",
          "chats": [
            {
              "activeUser" : "i will come to school soon",
              "receiver":  "i will be there too.. just give me few minutes"
            }
          ]
        },
        {
          "id": 9,
          "profilePhoto" : "http://www.joshfinnie.com/assets/images/josh-tm.jpeg",
          "name": "Frontednd Code",
          "lastMessage": "Bro smart: what i think this should be...",
          "chats": [
            {
              "activeUser" : "i will come to school soon",
              "receiver":  "i will be there too.. just give me few minutes"
            }
          ]
        },
        {
          "id": 10,
          "profilePhoto" : "http://www.joshfinnie.com/assets/images/josh-tm.jpeg",
          "name": "Whogorent",
          "lastMessage": "Bro smart: what i think this should be...",
          "chats": [
            {
              "activeUser" : "i will come to school soon",
              "receiver":  "i will be there too.. just give me few minutes"
            }
          ]
        }

      ],
      chatHistoryVisible: false,
      selectedChat: 0,
      selectedContactChat: []
    }

  }


  render() {
    const { contacts, chatHistoryVisible, selectedContactChat } = this.state;
    return (
      <div className="app">
          <ChatList contacts={ contacts } getChats={ this.getChats }/>
          <View visibility={ chatHistoryVisible } selectedContact={ selectedContactChat }/>
      </div>
    );
  }


   getChats = (event, id) => {
     event.preventDefault();

     const { contacts, selectedContactChat } = this.state;
     let chat = []
     contacts.filter( (contact) => {
        if (contact.id === id) {
          return chat = [...chat, contact]
        }
     })

     this.setState({ chatHistoryVisible: true, selectedChat: id, selectedContactChat: chat });
   }

}

export default App;

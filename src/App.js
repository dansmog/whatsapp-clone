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
              "Daniel":  "i will be there too.. just give me few minutes"
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
              "Gbenga":  "i will be there too.. just give me few minutes"
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
              "Daniel":  "i will be there too.. just give me few minutes"
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
              "Damilola":  "i will be there too.. just give me few minutes"
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
              "Daniel":  "i will be there too.. just give me few minutes"
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
              "Daniel":  "i will be there too.. just give me few minutes"
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
              "Daniel":  "i will be there too.. just give me few minutes"
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
              "Daniel":  "i will be there too.. just give me few minutes"
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
              "Daniel":  "i will be there too.. just give me few minutes"
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
              "Daniel":  "i will be there too.. just give me few minutes"
            }
          ]
        }

      ],
      chatHistoryVisible: false,
      selectedChat: null
    }

  }
   getChats = (id) => {
     this.setState({chatHistoryVisible: true});
     this.setState({ selectedChat: id})
   }
  

  render() {
    return (
      <div className="app">
          <ChatList contacts={this.state.contacts } getChats={ this.getChats }/>
          <View visibility={ this.state.chatHistoryVisible } selectedChat={ this.state.selectedChat }/>
      </div>
    );
  }


  /** @params contact ==  the return value of getSelectedContact() */
  // showChatView(contact){
  //   return selectedContactToChat = contact;
  // }

  // getSelectedContact = (id) => {
  //   let contacts = this.state.contacts;
  //   let selectedContact = contacts.filter( (contact) => {
  //     return contact.id === id;
  //   })
  //   this.setState({ activeChat: true})
  //   showChatView(selectedContact);
  // }


}

export default App;

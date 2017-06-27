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
          "name": "Fellowship",
          "lastMessage": "Bro smart: what i think this should be..."
        },
        {
          "id": 2,
          "profilePhoto" : "http://loremflickr.com/g/320/240/paris",
          "name": "CSC GROUP 19",
          "lastMessage": "Bro smart: what i think this should be..."
        },
        {
          "id": 3,
          "profilePhoto" : "https://s.yimg.com/pw/images/buddyicon11_r.png#76029035@N02",
          "name": "uno",
          "lastMessage": "Bro smart: what i think this should be..."
        },
        {
          "id": 4,
          "profilePhoto" : "http://loremflickr.com/320/240/business",
          "name": "snapshop",
          "lastMessage": "Bro smart: what i think this should be..."
        },
        {
          "id": 5,
          "profilePhoto" : "http://loremflickr.com/320/240/computers",
          "name": "Taiwo jide",
          "lastMessage": "Bro smart: what i think this should be..."
        },
        {
          "id": 6,
          "profilePhoto" : "http://loremflickr.com/320/240",
          "name": "Daniel anthony",
          "lastMessage": "Bro smart: what i think this should be..."
        },
        {
          "id": 7,
          "profilePhoto" : "http://www.joshfinnie.com/assets/images/josh-tm.jpeg",
          "name": "Diagram",
          "lastMessage": "Bro smart: what i think this should be..."
        },
        {
          "id": 8,
          "profilePhoto" : "http://www.joshfinnie.com/assets/images/josh-tm.jpeg",
          "name": "Noob2Hackers",
          "lastMessage": "Bro smart: what i think this should be..."
        },
        {
          "id": 9,
          "profilePhoto" : "http://www.joshfinnie.com/assets/images/josh-tm.jpeg",
          "name": "Frontednd Code",
          "lastMessage": "Bro smart: what i think this should be..."
        },
        {
          "id": 10,
          "profilePhoto" : "http://www.joshfinnie.com/assets/images/josh-tm.jpeg",
          "name": "Whogorent",
          "lastMessage": "Bro smart: what i think this should be..."
        }

      ],
      activeChat: true
    }

  }


  render() {
    return (
      <div className="app">
          <ChatList contacts={this.state.contacts}/>
          <View visibility={this.state.activeChat}/>
      </div>
    );
  }
}

export default App;

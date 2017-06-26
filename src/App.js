import React, { Component } from 'react';
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

      ]
    }
  }
  render() {
    return (
      <div className="app">
      
          <div className="chatlist">
            
            <div className="chatlist--header">
              <div className="chatlist--header__image">
                <img src="http://www.joshfinnie.com/assets/images/josh-tm.jpeg" />
              </div>
              <div className="chatlist--header__icons">
                <i className="material-icons">&#xE85A;</i>
                <i className="material-icons">&#xE5D4;</i>
              </div>
            </div>
            <div className="chatlist--search" style={{"position": "relative"}}>
              <input type="" placeholder="search or start a new chat"/>
              <img src={require('./images/searchicon.png')} alt={'user profile picture'} style={{"width": "15px", "position":"absolute","bottom":"18px","left":"20px","fontSize":"15px"}} />
  
            </div>
            
            <div className="list">
              
              {
                this.state.contacts.map(function(item){
                  return(
                     <div className="list--item" key={item.id}>
                        <div className="list--item__image">
                          <img src={item.profilePhoto} alt={item.name}/>
                        </div>
                        <div className="list--item__details">
                          <h3>{item.name}</h3>
                          <p>{item.lastMessage}</p>
                        </div>
                     </div>
                  )
                })
              }
             
            
            </div>
            
          </div>
          
          <div className="view" style={{"display": "flex", "flexGrow": "1", "justifyContent": "center", "alignItems": "center"}}>

            <div className="view--whatsapp" style={{"alignSelf": "center", "textAlign": "center"}}>
                <img src={require('./images/whatsapp.png')} alt={"whatsapp key point"} style={{"width": "250px"}} />
                <h2>keep you phone connected</h2>
                <p>whatsapp connects to your phone to sync messages. To reduce data <br/>usage, connect your phone to wifi</p>
            </div>

            
          </div>
    
      </div>
    );
  }
}

export default App;

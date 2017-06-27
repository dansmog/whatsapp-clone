import React, { Component } from 'react';


class ChatListSearch extends Component {
    render(){
        return(
            <div className="chatlist--search" style={{"position": "relative"}}>
              <input type="" placeholder="search or start a new chat"/>
              <img src={require('../../images/searchicon.png')} alt={""} style={{"width": "15px", "position":"absolute","bottom":"18px","left":"20px","fontSize":"15px"}} />
            </div>
        )
    }
}


export default ChatListSearch;
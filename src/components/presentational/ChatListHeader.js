import React, { Component } from 'react';

class ChatListHeader extends Component {
    render(){
        return(
            <div className="chatlist--header">
              <div className="chatlist--header__image">
                <img src="http://www.joshfinnie.com/assets/images/josh-tm.jpeg" alt={""}/>
              </div>
              <div className="chatlist--header__icons">
                <i className="material-icons">&#xE85A;</i>
                <i className="material-icons">&#xE5D4;</i>
              </div>
            </div>
        )
    }
}

export default ChatListHeader;
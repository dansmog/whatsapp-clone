import React, { Component }     from 'react';
import ChatListHeader           from '../presentational/ChatListHeader';
import ChatListSearch           from './ChatListSearch';
import List                     from './List';

class ChatList extends Component {
    render(){
        return(
            <div className="chatlist">
            
            <ChatListHeader />
            <ChatListSearch />
            <List contacts={this.props.contacts} />
            
          </div>
        )
    }
}

export default ChatList;
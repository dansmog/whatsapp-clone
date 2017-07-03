import React, { Component } from "react";

class ListItem extends Component {
    render(){
      let item = this.props.item;
      return (
         <div className="list--item" onClick={ () => { this.props.getChats(item.id) } }>
            <div className="list--item__image">
                <img src={item.profilePhoto} alt={item.name}/>
            </div>
            <div className="list--item__details">
                <h3>{item.name}</h3>
                <p>{item.lastMessage}</p>
            </div>
        </div>
      )
    }
}


export default ListItem;
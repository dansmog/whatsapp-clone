import React, { Component }     from 'react';
import ListItem                 from '../presentational/ListItem';

class List extends Component {
    render(){
        let listitem = this.props.contacts.map((item) => {
            return <ListItem item={item} key={item.id} getChats={ this.props.getChats }/>
        })
        return(
            <div className="list">
                {listitem}
            </div>
        )
    }
}

export default List;
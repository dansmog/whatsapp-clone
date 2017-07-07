import React, { Component }     from 'react';
import ViewWhatsapp             from '../presentational/ViewWhatsapp';  
import ViewChatHistory          from './ViewChatHistory';  

class View extends Component {
    render(){
        let visibility = this.props.visibility;
        console.log(this.props.contacts);
        console.log(visibility);
        let view;
        view = (visibility) ? <ViewChatHistory selectedContactChat={ this.props.contacts } /> : <ViewWhatsapp />
        return(
         <div className="view" style={{"display": "flex", "flexGrow": "1"}}>
                { view }
          </div>
        )
    }
}

export default View;   
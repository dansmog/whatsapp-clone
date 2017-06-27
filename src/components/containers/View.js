import React, { Component }     from 'react';
import ViewWhatsapp             from '../presentational/ViewWhatsapp';  
import ViewChatHistory          from './ViewChatHistory';  

class View extends Component {
    render(){
        return(
         <div className="view" style={{"display": "flex", "flexGrow": "1", "justifyContent": "center", "alignItems": "center"}}>
                <ViewWhatsapp />
                <ViewChatHistory />
          </div>
        )
    }
}

export default View;
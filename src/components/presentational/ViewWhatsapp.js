import React, { Component }     from 'react';


class ViewWhatsapp extends Component {
    render(){
        return(
            <div className="view--whatsapp" style={{"alignSelf": "center", "textAlign": "center"}}>
                <img src={require('../../images/whatsapp.png')} alt={"whatsapp key point"} style={{"width": "250px"}} />
                <h2>keep you phone connected</h2>
                <p>whatsapp connects to your phone to sync messages. To reduce data <br/>usage, connect your phone to wifi</p>
            </div>
        )
    }
}

export default ViewWhatsapp;
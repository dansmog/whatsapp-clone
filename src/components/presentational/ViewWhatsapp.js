import React, { Component }     from 'react';


class ViewWhatsapp extends Component {
    render(){
        return(
            <div className="view--whatsapp" style={{"display": "flex", "justifyContent" : "center", "background" : "#f8f9fb", "flexGrow": "1", "alignItems": "center"}}>
                <div id="" style={{"width" : "500px", "textAlign" : "center"}}>
                    <img src={require('../../images/whatsapp.png')} alt={"whatsapp key point"} style={{"width": "250px"}} />
                    <h2>keep you phone connected</h2>
                    <p>whatsapp connects to your phone to sync messages. <br/>To reduce data usage, connect your phone to wifi</p>
                </div>
            </div>
        )
    }
}

export default ViewWhatsapp;
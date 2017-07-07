import React, { Component } from 'react';




class ViewChatHistory extends Component{
    render(){
        return(

            <div className="view--chat">
                <header>
                    <div className="user-details">
                        <div className="user-details">
                            <div>
                                <img src={''} style={{"width": "45px", "height": "40px", "borderRadius": "100%", "marginRight": "20px"}} alt={""}/>
                                <div className="user-details-name">
                                    <h3>Fellowship</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <nav className="extra-icons" style={{"width": "120px", "display": "flex", "justifyContent" : "space-between", "marginTop" : "10px"}}>
                        <i className="material-icons">&#xE8B6;</i>
                        <i className="material-icons">&#xE226;</i>
                        <i className="material-icons">&#xE5D4;</i>
                    </nav>

                </header>

            </div>
        )
    }
}

export default ViewChatHistory;
import React, { Component } from 'react';


class ViewChatHistory extends Component{
    render(){
        return(
            <div className="view--chat">

                <header>

                    <div className="user-details">
                        <img src={require('../../images/profile.jpg')} style={{"width": "45px", "height": "40px", "borderRadius": "100%", "margin-right": "20px"}} alt={""}/>
                        <div className="user-details-name">
                            <h3>Fellowship</h3>
                        </div>
                    </div>

                    <nav className="extra-icons" style={{"width": "120px", "display": "flex", "justifyContent" : "space-between", "marginTop" : "10px"}}>
                        <i className="material-icons">&#xE8B6;</i>
                        <i className="material-icons">&#xE226;</i>
                        <i className="material-icons">&#xE5D4;</i>
                    </nav>

                </header>


                <main className="view--chat__history">
                  <article className="chats">
                        <p>chat messages list</p>
                  </article>

                  <footer className="chat--input">
                        <i class="material-icons">&#xE7F2;</i>
                        <input type="text" refs="message" placeholder="Type a message" style={{"flexGrow": "1", "margin": "0 40px", "padding": "9px 15px"}}/>
                        <i class="material-icons">&#xE31D;</i>
                  </footer>
                </main>


            </div>
        )
    }
}

export default ViewChatHistory;
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="container">
         <div className="content-l">
            <div className="content-widget">
              <div className="img-widget">
                <div className="cir-30">
                  <img src="images/profile_img_01.png" className="img-responsive" height="35"/>
                </div>
              </div>
              <div className="details">
                <h3>Name</h3>
                <button type="button">Details</button>
              </div>
            </div>
         </div>
         <div className="content-r">
            <div className="details-widget">
              <div className="cir-img">
                <div className="cir-80">
                <img src="images/profile_img_01.png" className="img-circle"/>
                </div>
                <p>Age <span>22</span> Gender <span>M</span></p>
              </div>
              <div className="info">
                <h3>First Last</h3>
                <p>123-456-7890</p>
                <p>08-30-1979</p>
                <p>Location</p>
              </div>
              <div className="email">
                <a href="mailto:anyone@anywebaddress.com">anyone@anywebaddress.com</a>
              </div>
            </div>
         </div>
       </div>
      </div>
    );
  }
}

export default App;

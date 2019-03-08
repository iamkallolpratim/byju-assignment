import React, { Component } from 'react';
import AppRouter from '../routes/AppRouter';


class AppLayout extends Component {
  

  render() {
    return (
      <React.Fragment>
        
                <div className="container">
                <AppRouter {...this.props} />
                </div>
              
            
      </React.Fragment>
    );
  }
}


export default AppLayout;


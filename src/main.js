import React from 'react';
import ReactDOM from 'react-dom';


import Home from './app/pages/Home.js';
import Header from './app/components/layout/Header.js';

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app'));

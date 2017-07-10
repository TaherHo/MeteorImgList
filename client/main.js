/**
 * Created by taho on 02.07.17.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList';

class App extends Component {

     render() {
        return (<div>
                react component;
                <br/>
                <ImageList/>
            </div>
        );
    };
}

Meteor.startup(function () {
    ReactDOM.render(<App />, document.querySelector('.container'));

});


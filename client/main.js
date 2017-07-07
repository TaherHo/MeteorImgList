/**
 * Created by taho on 02.07.17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ImageList from './components/ImageList';

const App = function () {
    return (<div>
                react component;
            <br/>
            <ImageList/>
            </div>
    );
};

Meteor.startup(function () {
     ReactDOM.render(<App />, document.querySelector('.container'));
});


/**
 * Created by taho on 02.07.17.
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/ImageList';

class App extends Component {

    constructor(props){
        super(props);

        this.state={images:[]};
    };


    componentWillMount(){
        var self = this;
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0  ')
            .then(function (response) {
                return this.setState({images:response.data.data});
        }.bind(this));
    };

     render() {
         console.log(this.state.images);
        return (<div>
                react component;
                <br/>
                <ImageList images={this.state.images}/>
            </div>
        );
    };
}

Meteor.startup(function () {
    ReactDOM.render(<App />, document.querySelector('.container'));

});


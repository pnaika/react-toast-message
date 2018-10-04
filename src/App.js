import React, {Component} from 'react';
import './App.css';
import './ReactToaster/ReactToaster.js';
import ReactToasterMessage from './ReactToaster/ReactToaster.js';
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toasterType: ''
        };
        this.makeDummyApi = this.makeDummyApi.bind(this);
    }

    componentWillMount() {
        this.makeDummyApi();
    }

    makeDummyApi() {
        axios
            .get('http://localhost:3000')
            .then(response => {
                console.log('respo ,', response)
                this.setState({
                    toasterType: 'success'
                })
            })
            .catch(e => {
                this.setState({
                    toasterType: 'error'
                })
            })
    }

    render() {
        return (
            <div className="App">
                <ReactToasterMessage showToaster={true} toasterType={this.state.toasterType}/>
            </div>
        );
    }
}

export default App;

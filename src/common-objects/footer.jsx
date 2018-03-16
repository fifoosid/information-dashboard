import React, { Component } from 'react';
import '../css/footer.css';

export default class Footer extends Component {
    render() {
        return(
            <div className="footer">
                <p>If you like to help extending this great project, don't hesitate to contact me or make a pull request here: <a href="https://github.com/fifoosid/information-dashboard">Github</a> &hearts;</p>
            </div>
        );
    }
}
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/navigation.css';

export default class DefaultNavigation extends Component {
    render() {
        return(
            <Link className="back-button-link" to="/">
                <div className="back-button"></div>
            </Link>
        );
    }
}
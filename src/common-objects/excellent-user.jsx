import React, { Component } from 'react';
import '../css/excellent-user.css';

export default class ExcellentUser extends Component {
    render() {
        return(
            <div className="card">
                <div className="card-image"></div>
                <div className="card-info">
                    <h2 className="name">Виктория Любомирова Петкова</h2>
                    <span>5 <sup>ти</sup> курс, Международни Отношения и още малко текст</span>
                    <span>Успех: 6.00</span>                                
                </div>
            </div>
        );
    }
}
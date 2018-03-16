import React, { Component } from 'react';
import DefaultNavigation from '../common-objects/navigation';
import '../css/excellence.css';
import Card from '../common-objects/excellent-user';
import Footer from '../common-objects/footer';

export default class Excellence extends Component {
    render() {
        return(
            <div>
                <DefaultNavigation></DefaultNavigation>
                
                {/* Container element */}
                <div className="parallax">
                    <div className="blur-parallax"></div>
                </div>


                <div className="main-content">
                    <div className="header">
                        <h1>Отличници на Юридически Факултет</h1>
                    </div>

                    <div className="content">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        
                    </div>
                </div>
                              
                <Footer />
            </div>
        );
    }
}
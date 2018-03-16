import React, { Component } from 'react';
import DefaultNavigation from '../common-objects/navigation';
import Footer from '../common-objects/footer';
import '../css/taxes.css';

//3rd party
import { LineChart } from 'react-chartkick';
import Chart from 'chart.js';

//3rd party


export default class Taxes extends Component {
    state = {
        data : [
            {"name":"Право", "data": {'1': 350, '2': 300, '3': 300, '4': 250, '5': 200}},
            {"name":"Международни отношения", "data": {'1': 380, '2': 320, '3': 300, '4': 250, '5': 200}},
            {"name":"Правни отношения", "data": {'1': 480, '2': 500, '3': 300, '4': 150, '5': 290}}
        ]
    }

    createChart() { 
        const chartContainer = document.getElementById('chart-container');
        console.log(chartContainer);
    }

    render() {
        // this.createChart();
        return(
            <div>
                <DefaultNavigation />
                <h2 className="header">Такси за обучение</h2>
                <div className="main-content">
                    <div className="chart-container flex-column">
                        <span className="tooltip">Изберете Вашата специалност за повече четливост</span>
                        <LineChart xtitle="Година на обучение" ytitle="Такса(в лева)" download="UF_taxes" messages={{empty: "Няма данни"}} suffix=" лева" curve={false} data={ this.state.data } />
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
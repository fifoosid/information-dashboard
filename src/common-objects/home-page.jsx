import React, { Component } from 'react';
import '../css/home-page.css';
import { Link } from 'react-router-dom';
import Background from './background';

export default class HomePage extends Component {
    render() {
        return(
            <div>
                <Background></Background>
                <div className="main">
                    <div className="buttons-wrapper">
                        <Link to="scholarships"><button className="btn btn-secondary btn-custom">Информация за стипендии</button></Link>
                        <Link to="payment"><button className="btn btn-secondary btn-custom">Плащане на семестър</button></Link>
                        <Link to="sports"><button className="btn btn-secondary btn-custom">Информация за спорт</button></Link>
                        <Link to="program"><button className="btn btn-secondary btn-custom">Програма(по курсове и специалности)</button></Link>
                        <Link to="selectable"><button className="btn btn-secondary btn-custom">Информация за избираеми дисциплини</button></Link>
                        <Link to="taxes"><button className="btn btn-secondary btn-custom">Такси</button></Link>
                        <Link to="fss"><button className="btn btn-secondary btn-custom">Информация за ФСС</button></Link>
                        <Link to="contacts"><button className="btn btn-secondary btn-custom">Контакти на преподаватели и асистенти</button></Link>
                        <Link to="titulars"><button className="btn btn-secondary btn-custom">Информация за титуляри</button></Link>
                        <Link to="rights-and-possibilities"><button className="btn btn-secondary btn-custom">Права и възможности на студента</button></Link>
                        <Link to="dormitory"><button className="btn btn-secondary btn-custom">Кандидатстване за общежитие</button></Link>
                        <Link to="state-exam"><button className="btn btn-secondary btn-custom">Държавни изпити</button></Link>
                        <Link to="excellence"><button className="btn btn-secondary btn-custom">Отличници</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}
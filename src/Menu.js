import React from 'react';
import './App.css';

export default class Menu extends React.Component {
    mouseClick (e, showIndex) {   
        let a = document.querySelectorAll('a');
        a.forEach(element => {
        element.classList.remove("selected");
        });
        e.target.classList.add("selected");
        this.props.updateActivePlaceFunc(showIndex)
    }

    render() {
        return (
        <div className="menu">
            <h2>Select a City</h2>
            <nav>
                <ul>
                    {this.props.places.map((place, index) => (
                        <li key={index}><a className={(index===0) ? "selected" : "notselected"} href="/#" onClick={(e) => {this.mouseClick(e,index)}}>{place.name}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
        );
    }
}
import { Component } from 'react';
import './employees-list-item.css';

const EmployeesListItem = (props) => {
        const {name, salary, onDelete, onToggleIncrease, onToggleLike, increase, like} = props;
       
        let className="list-group-item d-flex justify-content-between"
        if (increase) {
            className += ' increase'
        } 

        if (like) {
            className += ' like'
        }

        return (
            <li className={className}>
                <span 
                    onClick={onToggleLike} 
                    className="list-group-item-label">{name}
                </span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className="d-flex justify-content-center align-items-center">
                    <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleIncrease}>
                        <i className="fas fa-cookie"></i>
                    </button>
    
                    <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    
}


export default EmployeesListItem;
import './employees-list.css';
import EmployeesListItem from '../employees-list-item/employees-list-item';

const EmployeesList = ({data, onDelete, onToggleIncrease, onToggleLike}) => {
    const element = data.map(item => {
        const {id, ...itemProps} = item
        return (
            //<EmployeesListItem name={item.name} salary={item.salary}/>
            <EmployeesListItem 
                key={id} {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleIncrease={(e) => onToggleIncrease (id)}
                onToggleLike={(e) => onToggleLike (id)}/>
        )
    })
    
    return (
        <ul className="app-list list-group">
           {element}
        </ul>
    )
}

export default EmployeesList;
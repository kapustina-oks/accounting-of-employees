

import './app-filter.css';

const AppFilter = (props) => {
    const btn = [
        {name: 'all' , label: 'Все сотрудники'},
        {name: 'like' , label: 'На повышение'},
        {name: 'moreThan1000' , label: 'З/П больше 1000$'},
    ]

    const buttons = btn.map(({name, label}) => {
        const activ = props.filter === name;
        const clazz = activ ? 'btn-light' : 'btn-outline-light';
           return (
                <button 
                    type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSalary(name)}>
                    {label}
                </button>
           )
    })

    return (
        <div class="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;
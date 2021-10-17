import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import EmployeesList from '../employees-list/employees-list'
import EmployeesAddForm from '../employees-add-form/employees-add-form'


import './app.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Mark', salary: 1000, increase: true, like:false, id: 1},
                {name: 'Anna', salary: 2000, increase: false, like:false, id: 2},
                {name: 'John', salary: 3000, increase: false, like:false, id: 3},
            ],
            term: '',
            filter: 'all',
        } 
        this.maxId = 4;
        
    }

  
    deleteItem = (id) => {
       this.setState(({data}) => {
        //const index = data.findIndex(elem => elem.id === id);
        //const newData = [...data.slice(0, index), ...data.slice(index + 1)];
        return {
            data: data.filter(item => item.id !== id)
        }
       })
    }

    createItem = (name, salary) => {
        const objItem = {
            name: name,
            salary: salary,
            increase: false,
            like: false,
            id: this.maxId++,
        }
        
        if (objItem.name.length !== 0 && objItem.salary.length !== 0) {
            this.setState(({data}) => {
                const newData = [...data, objItem]
                return {
                    data: newData
                }
                 
            })
        } else {
            return alert('Введите ваши данные!!!')
        }
       
       
    }

    onToggleIncrease = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return {...item, increase: !item.increase};
                }
                return item;
            })
        }))
    }

    onToggleLike = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id);
            const oldItem = data[index];
            const newItem = {...oldItem, like: !oldItem.like};
            const newData = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newData
            }
        })
    }
    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'like':
                return  items.filter(item => item.like);
            case 'moreThan1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items;
        }
        
    }

    onUpdateValue = (term) => {
        this.setState({term});
    }

    onFilterSalary = (filter) => {
        this.setState({filter});
    }
    

    render () {
        const visibleData = this.filterPost(this.searchEmp(this.state.data, this.state.term), this.state.filter);
        return (
            <div className="app">
                <AppInfo 
                    total={this.state.data.length}
                    premium={this.state.data.filter(item => item.increase).length}/>
    
                <div className="search-panel">
                    <SearchPanel 
                        onUpdateValue = {this.onUpdateValue}/>
                    <AppFilter
                        filter = {this.state.filter}
                        onFilterSalary={this.onFilterSalary}/>
                </div>
    
                <EmployeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncrease={this.onToggleIncrease}
                    onToggleLike={this.onToggleLike}/>
                    
                <EmployeesAddForm
                    onAdd={this.createItem}/>
                    
            </div>
        )
    }

    
    
}

export default App;
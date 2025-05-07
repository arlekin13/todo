import React from 'react'
import { createRoot } from 'react-dom/client'

import AppHeader  from './components/app-header'
import TodoList from './components/todo-list'
import SearchPanel from './components/search-panel'
import ItemStatusFilter from './components/item-status-filter'

import './index.css';



const App =()=>{
  const todoData =[
    {label:'Drink',important: false, id:1},
    {label:'Make',important: true, id:2},
    {label:'Have',important: false, id:3}

    
  ]

  return(
<div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  );
};

const element = <App/>;

const root = createRoot(
  document.getElementById('root')
);

root.render(element);
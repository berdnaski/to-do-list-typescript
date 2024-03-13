import { AddSharp } from 'react-ionicons'
import classes from "./Todo.module.css"
import List from '../List/List';

const Todo = () => {
  return (
    <div className={classes.todo}>
        <div className={classes.todo_container}>
          <h1>Todo</h1>
          <button><AddSharp /></button>
        </div>

        <div className={classes.list_container}>
          <List />
        </div>
    </div>
  )
}

export default Todo
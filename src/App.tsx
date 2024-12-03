import './App.css'
import {useReducer} from "react";
import {tasksReducer} from "./reducer/TasksReducer.tsx";
import AddTask from "./components/AddTask.tsx";
import TaskList from "./components/TaskList.tsx";

export let nextID = 3
const initialTasks: TaskType[] = [
    {id: 0, text: 'Philosopher’s Path', done: true},
    {id: 1, text: 'Visit the temple', done: false},
    {id: 2, text: 'Drink matcha', done: false}
]

export type TaskType = {
    id: number
    text: string
    done: boolean
}

function App() {
  const [tasks, dispatch] = useReducer(
      tasksReducer,
      initialTasks
  )

  const handleAddTask = (text: string)=> {
        dispatch({
            type: 'added',
            id: nextID++,
            text
        })
  }

  const handleChangeTask = (task: TaskType) => {
      dispatch({
          type: 'changed',
          task
      })
  }

  const handleDeleteTask = (taskID: number) => {
      dispatch({
          type: 'deleted',
          id: taskID
      })
  }

  return (
    <>
      <h1>Day off in Kyoto</h1>
      <AddTask onAddTask={handleAddTask}/>
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask={handleDeleteTask}/>
    </>
  )
}

export default App

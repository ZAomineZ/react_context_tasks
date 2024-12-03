import {Task} from "./Task.tsx";
import {TaskType} from "../App.tsx";

interface TaskListProps {
    tasks: TaskType[]
    onChangeTask: (task: TaskType) => void
    onDeleteTask: (taskId: number) => void
}

export default function TaskList({tasks, onChangeTask, onDeleteTask}: TaskListProps) {
    return <ul>
        {tasks.map(task => {
            return <li key={task.id}>
                <Task
                    task={task}
                    onChange={onChangeTask}
                    onDelete={onDeleteTask}
                />
            </li>
        })}
    </ul>
}
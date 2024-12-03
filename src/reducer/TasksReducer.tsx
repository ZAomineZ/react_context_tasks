import {TaskType} from "../App.tsx";

type Action =
    | { type: "added", id: string | number, text: string }
    | { type: "changed", task: TaskType }
    | { type: "deleted", id: string | number }

export function tasksReducer(tasks: TaskType[], action: Action): TaskType[] {
    switch (action.type) {
        case 'added': {
            console.log(action)
            return [...tasks, {
                id: typeof action.id === "string" ? parseInt(action.id, 10) : action.id,
                text: action.text,
                done: false
            }]
        }
        case "changed": {
            return tasks.map((t) =>
                t.id === action.task.id ? action.task : t
            );
        }
        case 'deleted': {
            return tasks.filter(t => t.id !== action.id);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
import {useState} from "react";

interface AddTaskProps {
    onAddTask: (text: string) => void
}

export default function AddTask({onAddTask}: AddTaskProps) {
    const [text, setText] = useState('');

    return <>
        <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={() => {
            onAddTask(text);
        }}></button>
    </>
}
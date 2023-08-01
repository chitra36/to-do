import {useState} from "react";
import TaskItem from "./task_item";

export default function Todo() {

    let [task, setTask] = useState([]);
    let [inputTask, setInputTask] = useState("")
    let [render,setRender] = useState(false);
    function addTask() {
        let tempTask = {
            title: inputTask,
            done: false,
            added: Date.now()
        }
        setTask([...task, tempTask])
        setInputTask("")
    }

   function markDone(index) {
        console.log(index)
        let tempTask = task[index];
       tempTask.done = !tempTask.done;
       console.log(tempTask)
       let allTasks = task;
       allTasks[index] = tempTask;
       setTask(allTasks);
       setRender(!render);
   }

    return (
        <>
            <div className="card mx-5 my-5">
                <div className="card-header">
                    <h3>Todo App</h3>
                </div>
                <div className="card-body">
                    <div id="todo-wrapper">
                        <div id="todo-task-wrapper">
                            {
                                task.map((value,index) => <TaskItem
                                    key={index}
                                    task={value.title}
                                    done={value.done}
                                    index={index}
                                    time={value.added}
                                    clickme={markDone}
                                />)
                            }
                        </div>
                        <div className="d-flex flex-row">
                            <input type="text"
                                   onChange={(e) => setInputTask(e.target.value)}
                                   className="form-control form-control-lg"
                                   placeholder="Enter task" value={inputTask}/>
                            <button className="btn btn-primary border-0 rounded-0"
                                    onClick={addTask}
                            >Add Task
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// input value
// button click event
// array add input field
// Render the list item
// Reactor and Observer - Flutter, Js
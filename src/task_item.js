export default function TaskItem(props){
    function remove() {
        props.clickme(props.index)
    }
    return (
       <>
           {!props.done &&
               <div className="alert alert-primary" onClick={remove}>
                   <h3>{props.task}</h3>
                   <h5>{props.time}</h5>
                   <h6>Task Not Done</h6>
               </div>
           }
           {props.done &&
               <div className="alert alert-danger" onClick={remove}>
                   <h3>{props.task}</h3>
                   <h5>{props.time}</h5>
                   <h6>Task  Done</h6>
               </div>
           }

       </>
    )
}
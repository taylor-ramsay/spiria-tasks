import React from 'react';

const TaskItem = (props) => {
  return (
    <div className="task-item">
      <p><i class="fas fa-times" onClick={()=>props.taskComplete(props.name)}></i> {props.name}</p>
    </div>
  )
}

export default TaskItem

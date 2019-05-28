import React from 'react'

const TaskInput = (props) => {

  return (
    <div className="task-input">
      <input
        onChange={(e) => props.onChange(e)}
        value={props.value}
        onKeyDown={(e) => { e.key && e.key === 'Enter' && props.addTask(e) }}
        placeholder="New Task"
      />
      {props.children}
    </div>
  );
}

export default TaskInput


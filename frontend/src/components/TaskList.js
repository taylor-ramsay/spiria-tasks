import React from 'react'

const TaskList = (props) => {
  return (
    <div className="task-list">
      {props.children}
    </div>
  )
}

export default TaskList

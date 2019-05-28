import React from 'react';

const AddTaskButton = (props) => {
  return (
    <div className="add-task-button">
      <button className={!props.active ? "inactive" : ""} onClick={() => props.addTask()}><i class="fas fa-plus"></i></button>
    </div>
  );
}

export default AddTaskButton;

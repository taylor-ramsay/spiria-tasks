import React from 'react';

const RemoveAllTasksButton = (props) => {
  return (
    <div className="remove-all-tasks-button">
      <button className={!props.active ? "inactive" : ""} onClick={() => props.removeAll()}>Remove All</button>
    </div>
  );
}

export default RemoveAllTasksButton;

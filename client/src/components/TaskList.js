import React from 'react';

const TaskList = () => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Assigned Tasks</h2>
      <ul className="list-disc pl-6">
        {/* Example Tasks */}
        <li>Prepare Morning Meal for Room 101</li>
        <li>Prepare Evening Meal for Room 202</li>
      </ul>
    </div>
  );
};

export default TaskList;

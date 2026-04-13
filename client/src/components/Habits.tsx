import React from 'react';

function Habits() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Habits</h1>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow border">
          <h3 className="text-lg font-semibold">No habits yet</h3>
          <p className="text-gray-600">Start by adding your first habit from the home page!</p>
        </div>
      </div>
    </div>
  );
}

export default Habits;

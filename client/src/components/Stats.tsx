import React from 'react';

function Stats() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Total Habits</h2>
          <p className="text-3xl font-bold text-blue-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Completed Today</h2>
          <p className="text-3xl font-bold text-green-600">0</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Current Streak</h2>
          <p className="text-3xl font-bold text-orange-600">0 days</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;

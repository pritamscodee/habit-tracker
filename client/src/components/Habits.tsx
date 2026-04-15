import React, { useEffect, useState } from 'react';
import { api } from '../api/axios-config';
import { toast } from 'sonner';

interface Habits_data {
  id: number;
  name: string;
  description: string;
}

function Habits() {
  const [data, setData] = useState<Habits_data[]>([]);





  useEffect(() => {
    const fetchData = async () => {
      try {

        const res = await api.get('/get');




        setData(res.data.data);
      } catch (err) {
        console.error('❌ Error:', err);
        toast.error('Failed to load habits');
      }
    };

    fetchData();
  }, []);







  async function handleDel(id: number) {
    try {
      console.log("id of deleting habit div:", id);

      await api.delete(`/del/${id}`);

      setData((prev) => prev.filter((e) => e.id !== id));

      toast("habit deleted success!!")
    } catch (err) {
      console.error("Delete failed:", err);
    }
  }


  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Habits</h1>
      <div className="space-y-5">
        {data.length > 0 ? (
          data.map((habit) => (
            <div
              key={habit.id}  // Use habit.id, not index
              className="bg-white p-4 rounded-xl border-2 border-black 
                   shadow-[2px_2px_0px_rgb(0,0,0)]"
            >
              <h3 className="text-xl font-semibold">{habit.name}</h3>
              <p className="text-gray-800 mb-4">
                {habit.description || "No description"}
              </p>
              <div className="flex gap-3 flex-wrap">
                <button
                  className="ml-auto px-3 py-1 border-2 border-black rounded-md
                       shadow-[2px_2px_0px_rgb(0,0,0)]
                       text-red-500
                       hover:translate-x-1 hover:translate-y-1
                       hover:shadow-none transition hover:bg-red-100"
                  onClick={() => handleDel(habit.id)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No habits data  found</p>
        )}
      </div>

    </div>
  );
}

export default Habits;
import  { useEffect, useState } from 'react';
import { api } from '../api/axios-config';
import { toast } from 'sonner';
import { Spinner } from "@/components/ui/spinner";
import { Habits_data } from '@/types/types';


function Habits() {
  const [data, setData] = useState<Habits_data[]>([]);
  const [loading, setLoading] = useState(true);
  const [deletingIds, setDeletingIds] = useState<number[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await api.get('/get');
        setData(res.data.data ?? []);
      } catch (err) {
        console.error('❌ Fetch error:', err);
        toast.error('Failed to load habits');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  async function handleDel(id: number) {
    const previousData = data;
    setData((prev) => prev.filter((habit) => habit.id !== id));
    setDeletingIds((prev) => [...prev, id]);

    try {
      await api.delete(`/del/${id}`);
      toast.success('Habit deleted successfully');
    } catch (err) {
      console.error('Delete failed:', err);
      setData(previousData);
      toast.error('Failed to delete habit. Please try again.');
    } finally {
      setDeletingIds((prev) => prev.filter((deletingId) => deletingId !== id));
    }
  }

  if (loading) {
    return (
      <div className="p-6 flex justify-center items-center min-h-200px">
        <Spinner className="h-8 w-8 text-blue-500" />
        <span className="ml-3 text-gray-600">Loading your habits...</span>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tighter mb-8 rotate-1deg  inline-block border-b-4 border-black">
        My Habits
      </h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {data.length > 0 ? (
          data.map((habit, index) => (
            <div
              key={habit.id}
              className={`
                bg-white border-4 border-black 
                shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
                hover:translate-x-1 hover:translate-y-1
                transition-all duration-150
                flex flex-col p-5
                aspect-square
                ${index % 2 === 0 ? 'rotate-[-0.5deg]' : 'rotate-[0.5deg]'}
              `}
            >
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight break-words">
                  {habit.name}
                </h3>
                {habit.desc && (
                  <p className="mt-2 font-mono text-sm text-black/70 line-clamp-3">
                    {habit.desc}
                  </p>
                )}
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  className="
    px-4 py-2 border-4 border-black 
    shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
    active:translate-x-1 active:translate-y-1 active:shadow-none
    transition-all duration-100
    font-bold uppercase text-sm
    bg-pink-500 text-white
    hover:bg-pink-600
    disabled:opacity-50 disabled:translate-x-0 disabled:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
  "
                  onClick={() => handleDel(habit.id)}
                  disabled={deletingIds.includes(habit.id)}
                  aria-label={`Delete habit ${habit.name}`}
                >
                  {deletingIds.includes(habit.id) ? '⌛' : '✖'}
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center p-12 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <p className="text-xl font-mono font-bold text-black/70">
              No habits yet. Create your first one!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Habits;
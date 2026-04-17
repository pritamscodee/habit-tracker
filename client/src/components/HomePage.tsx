import React, { useState } from 'react';
import { Button } from './ui/button';
import { Popover } from '@base-ui/react/popover';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { api } from '../api/axios-config';
import { toast } from 'sonner';

function Home() {





  return (
    <div className="min-h-screen bg-[#f7f7f7] p-6 flex items-center justify-center">
      <div className="w-full max-w-2xl">
     
        <div className="bg-yellow-300 border-4 border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-150">
          <div className="flex items-center gap-2 text-4xl font-black uppercase tracking-tighter text-black mb-2">
            ✏️ Habit Tracker
          </div>
          <p className="text-xl font-bold text-black/80 mb-8 font-mono">
            Build better habits, one day at a time.
          </p>

          <Popover.Root>
            <Popover.Trigger>
              <button className="bg-lime-400 border-4 border-black px-6 py-3 font-bold text-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 uppercase tracking-wide">
                + Add New Habit
              </button>
            </Popover.Trigger>

            <Popover.Portal>
              <Popover.Positioner sideOffset={16}>
                <Popover.Popup className="bg-white border-4 border-black p-6 w-[90vw] max-w-md shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] -rotate-1">
                  <Popover.Arrow className="fill-black stroke-black stroke-2">
                    <ArrowSvg />
                  </Popover.Arrow>
                  <Popover.Title className="text-3xl font-black mb-4 flex items-center gap-2 uppercase">
                    <span>➕</span> Create Habit
                  </Popover.Title>
                  <Form />
                </Popover.Popup>
              </Popover.Positioner>
            </Popover.Portal>
          </Popover.Root>
        </div>
      </div>
    </div>
  );
}

function Form() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Please enter a habit name');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await api.post('/post', { name, description });
      if (response.status === 201) {
        toast.success('Habit added! 💥');
        setName('');
        setDescription('');
      }
    } catch (err) {
      console.error(err);
      toast.error('Failed to add habit. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label className="font-bold uppercase text-sm">Habit Name *</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Gym, Study, Meditate"
          className="border-2 border-black bg-white rounded-none p-2 focus:outline-none focus:ring-2 focus:ring-black"
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label className="font-bold uppercase text-sm">Description</Label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Why this habit? Any notes?"
          className="border-2 border-black bg-white rounded-none p-2 focus:outline-none focus:ring-2 focus:ring-black"
          rows={3}
          disabled={isSubmitting}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-cyan-400 border-4 border-black py-3 font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-100 disabled:opacity-50 disabled:translate-x-0 disabled:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
      >
        {isSubmitting ? 'Saving...' : 'Save Habit'}
      </Button>
    </form>
  );
}


function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="24" height="12" viewBox="0 0 24 12" fill="none" {...props}>
      <path
        d="M12 0L24 12H0L12 0Z"
        fill="white"
        stroke="black"
        strokeWidth="2"
      />
    </svg>
  );
}

export default Home;
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Popover } from '@base-ui/react/popover';
import styles from '../index.module.css';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { api } from '../api/axios-config';
import { toast } from 'sonner';

function Home() {
  return (
    <div className="min-h-screen mt-7 ">
      <div className="border-2 border-black shadow-[4px_4px_0px_#000] p-6 rounded-lg ">
        <p className="text-shadow-black text-2xl">
          Build better habits, one day at a time.
        </p>
        <Popover.Root>
          <Popover.Trigger
            className="mt-4 border-2 border-black px-4 py-2 bg-white rounded rotate-2 hover:rotate-3 hover:bg-amber-700   active:shadow-[2px_2px_0px_#000]"
          >
            Add Habits
          </Popover.Trigger>

          <Popover.Portal>
            <Popover.Positioner sideOffset={8}>
              <Popover.Popup className={styles.Popup}>
                <Popover.Arrow className={styles.Arrow}>
                  <ArrowSvg />
                </Popover.Arrow>
                <Popover.Title className=" flex justify-center ">
                  <p className=" text-3xl">Add New Habit</p>
                </Popover.Title>
                <div>
                  <Form />
                </div>
              </Popover.Popup>
            </Popover.Positioner>
          </Popover.Portal>
        </Popover.Root>
      </div>

      <div className="flex items-center flex-col gap-3 mt-10">
        <div> Total Habits:</div>
        <div>Completed :</div>
        <div>Failed : </div>
      </div>
    </div>
  );
}

function Form() {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const response = await api.post('/post', { name, description });

      if (response.status === 201) {
        toast('Habit Added Successfully in database');

        setName('');
        setDescription('');
      }
      console.log('response from server', response.data);
    } catch (err) {
      console.log(err);
    }
    setName('');
    setDescription('');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f4ea] p-4">
      <Card className="w-full max-w-md border-2 border-dashed border-black shadow-none rounded-2xl bg-transparent">
        <CardHeader>
          <CardTitle className="text-2xl font-mono tracking-wide">
            Create Habit
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label className="font-mono">Habit Name</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Gym, Study"
                className="border-dashed border-2 border-black bg-transparent focus-visible:ring-0"
              />
            </div>

            <div className="space-y-2">
              <Label className="font-mono">Description</Label>
              <Textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your habit..."
                className="border-dashed border-2 border-black bg-transparent focus-visible:ring-0"
              />
            </div>

            <Button
              type="submit"
              className="w-full border-2 border-black border-dashed bg-transparent text-black hover:bg-black hover:text-white transition"
            >
              Save Habit
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

function ArrowSvg(props: React.ComponentProps<'svg'>) {
  return (
    <svg width="20" height="10" viewBox="0 0 20 10" fill="none" {...props}>
      <path
        d="M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V10H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z"
        className={styles.ArrowFill}
      />
      <path
        d="M8.99542 1.85876C9.75604 1.17425 10.9106 1.17422 11.6713 1.85878L16.5281 6.22989C17.0789 6.72568 17.7938 7.00001 18.5349 7.00001L15.89 7L11.0023 2.60207C10.622 2.2598 10.0447 2.2598 9.66436 2.60207L4.77734 7L2.13171 7.00001C2.87284 7.00001 3.58774 6.72568 4.13861 6.22989L8.99542 1.85876Z"
        className={styles.ArrowOuterStroke}
      />
      <path
        d="M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z"
        className={styles.ArrowInnerStroke}
      />
    </svg>
  );
}

export default Home;

import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskStatuse = ({ e, setcomPlet, Remove }) => {
  const [isCompleted, setIsCompleted] = useState(false);

  const hndlClick = () => {
    if (e.length >= 12) {
      toast.warn("You can't add more than 12 tickets!");
      return;
    }

    toast.success(`Ticket #${e.id} clicked! Title: ${e.title}`);

    setcomPlet((p) => {
      if (p.find((item) => item.id === e.id)) return p;
      return [...p, e];
    });

    setIsCompleted(true);
    Remove(e);
  };

  return (
    <div className="mt-7">
      <div
        key={e.id}
        className={`w-full px-10 py-5 rounded-xl shadow-xl transition-all duration-300 ${
          isCompleted ? 'bg-green-100 py-8 ' : 'bg-white'
        }`}
      >
        <h1 className="font-bold text-[15px]">{e.title}</h1>

        <button
          className={`w-full mt-5 text-white rounded-md p-2 transition-all duration-300 ${
            isCompleted ? 'bg-green-800' : 'bg-green-600'
          }`}
          onClick={hndlClick}
          disabled={isCompleted}
        >
          {isCompleted ? 'Completed' : 'Complete'}
        </button>
      </div>
    </div>
  );
};

export default TaskStatuse;

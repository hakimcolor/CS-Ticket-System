import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { toast } from 'react-toastify';

const ResolvedTask = ({ data, Remove }) => {
  const handleRemove = () => {
    Remove(data.id); 
    toast.error(`Task "${data.title}" removed!`, {
      position: 'top-right',
      autoClose: 2000,
      
    });
  };

  return (
    <div className="bg-green-50 mt-5 rounded-xl shadow-md p-5">
      <div className="p-4">
        <h1 className="font-bold text-xl">{data.title}</h1>
        <div className="flex justify-between items-center mt-5">
          <h1 className="text-green-700 font-medium flex items-center gap-2 text-xl">
            <FiCheck className="text-green-600 " /> Completed
          </h1>
          <button
            onClick={handleRemove}
            className="text-red-500 hover:underline cursor-pointer"
          >
            Click to remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResolvedTask;

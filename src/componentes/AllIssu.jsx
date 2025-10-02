import React from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Showcard = ({ data, setCount, count, compleT }) => {

  const isCompleted = compleT.some((t) => t.id === data.id);

  
  if (isCompleted) {
    return null;
  }
  // console.log(compleT);
  
  // console.log(count.length);

  const handelclick = () => {
    if (count.length >= 12) {
      toast.warn("You can't add more than 12 tickets!");
      return;
    }

    toast.info(`Ticket #${data.id} clicked! Title: ${data.title}`);

    setCount((p) => {
      if (p.find((items) => items.id === data.id)) return p;
      return [...p, data];
    });
  };

  return (
    <div>
      <div
        key={data.id}
        className="bg-white shadow-md rounded-lg p-4 w-full h-42 cursor-pointer"
        onClick={handelclick}
      >
        <div className="flex justify-between items-center mb-2 h-10">
          <h1 className="text-lg font-semibold text-gray-800">{data.title}</h1>
          <span
            className={`
              flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium
              ${data.status === 'Open' ? 'bg-green-100 text-green-700' : ''}
              ${
                data.status === 'In-Progress'
                  ? 'bg-yellow-100 text-yellow-700'
                  : ''
              }
              ${data.status === 'Closed' ? 'bg-red-100 text-red-700' : ''}
            `}
          >
            <span className="h-3 w-3 rounded-full bg-current"></span>
            {data.status}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 h-10">{data.description}</p>

        <div className="flex justify-between items-center text-sm text-gray-500 p-1 mt-5">
          <div className="flex gap-4 ">
            <span className="font-medium">#{data.id}</span>
            <span
              className={`
                font-semibold
                ${data.priority === 'High' ? 'text-red-500' : ''}
                ${data.priority === 'Medium' ? 'text-yellow-500' : ''}
                ${data.priority === 'Low' ? 'text-green-500' : ''}
              `}
            >
              {data.priority}
            </span>
          </div>

          <div className="flex gap-4 ">
            <span>{data.customer}</span>
            <div className="flex items-center gap-1">
              <FaCalendarAlt className="text-gray-400" />
              <span>{data.createdAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcard;

import { use } from 'react';
import AllIssu from './AllIssu';
import TaskStatuse from './TaskStatuse';
import RemoveData from './RemoveData';

const AllCardData = ({ Fatcedata, count, setCount, complet, setcomPlet }) => {
  const allData = use(Fatcedata);
  const couts = count;
  const compleT = complet;
  console.log(compleT);
  const Remove = (id) => {
    setcomPlet((p) => p.filter((data) => data.id !== id));
    setCount((p) => p.filter((data) => data.id !== id));
  };

  const Resolve = (data) => {
    setCount((p) => p.filter((t) => t.id !== data.id));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6 mt-[-90px] md:p-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 ">
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">
            Customer Tickets
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {allData.map((data) => (
              <AllIssu
                setCount={setCount}
                key={data.id}
                data={data}
                compleT={compleT}
                setcomPlet={setcomPlet}
                count={count}
              />
            ))}
          </div>
        </div>

        <div className=" mt-13">
          <div className="bg-white shadow-md rounded-md   p-4  mt-5">
            <h2 className="text-lg font-semibold text-gray-700 mt-8 mb-4">
              Task Status
            </h2>

            {couts.length > 0 ? (
              couts.map((e) => (
                <TaskStatuse
                  e={e}
                  key={e.id}
                  setcomPlet={setcomPlet}
                  Remove={Resolve}
                ></TaskStatuse>
              ))
            ) : (
              <div className=" text-gray-500 text-md">
                Select a ticket to add to Task Status
              </div>
            )}
          </div>
          <div className="bg-white shadow-md rounded-md p-[1px] px-3  pb-2 mt-5">
            <h2 className="text-lg font-semibold text-gray-700 mt-8 mb-4">
              Resolved Task
            </h2>
            {compleT.length > 0 ? (
              compleT.map((data) => (
                <RemoveData Remove={Remove} key={data.id} data={data} />
              ))
            ) : (
              <div className="text-gray-500 text-md mb-10">
                No resolved tasks yet.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCardData;

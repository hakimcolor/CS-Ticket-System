import React, { Suspense, useState } from 'react';
import Navber from './componentes/Navber';
import Footer from './componentes/Footer';
import LBg from './assets/BgL.png';
import Rbg from './assets/bgr.png';
import { ToastContainer } from 'react-toastify';
import AllCardData from './componentes/AllCardData';
const Fatcedata = fetch('./Alldata.json').then((res) => res.json());
const FatceData = Fatcedata;
const App = () => {
  const [count, setCount] = useState([]);
  const [complet, setcomPlet] = useState([]);
  console.log(complet);

  // console.log(count);
  // const Sh = count;
  // // console.log(Sh.title);

  return (
    <div>
      <Navber></Navber>

      <div className=" py-60 bg-[#f5f5f5]">
        <div className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-2 xl:p-0 gap-5 max-w-[1400px] mx-auto  ">
          <div className="relative bg-gradient-to-br from-[#4800f1] to-[#9c60f1] rounded-xl text-white h-60   xl:w-[702px] flex justify-center items-center flex-col ">
            <h1 className="font-bold">In-Progress</h1>
            <p className="font-bold text-[40px]">{count.length}</p>
            <img
              className="absolute right-0 top-0 h-full w-0 sm:w-auto "
              src={LBg}
              alt=""
            />
            <img
              className="absolute left-0 top-0 h-full w-0 sm:w-auto "
              src={Rbg}
              alt=""
            />
          </div>
          <div className="relative bg-gradient-to-l from-[#00827a] to-[#55d068] rounded-xl text-white h-60 flex justify-center items-center flex-col  ">
            <h1 className="font-bold">Resolved</h1>
            <p className="font-bold text-[40px]">{complet.length}</p>
            <img
              className="absolute right-0 top-0 h-full w-0 sm:w-auto "
              src={LBg}
              alt=""
            />
            <img
              className="absolute left-0 top-0 h-full w-0 sm:w-auto "
              src={Rbg}
              alt=""
            />
          </div>
        </div>
      </div>
      <Suspense
        fallback={
          <h1 className="flex justify-center items-center h-screen text-4xl font-bold text-purple-600 bg-gray-100">
            Loading...
          </h1>
        }
      >
        <AllCardData
          complet={complet}
          setcomPlet={setcomPlet}
          count={count}
          setCount={setCount}
          Fatcedata={FatceData}
        ></AllCardData>
      </Suspense>

      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default App;

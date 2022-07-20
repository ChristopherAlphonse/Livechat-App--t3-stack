import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="grid h-screen place-items-center ">
        <button className="btn btn-primary bg-slate-400 p-2 rounded hover:bg-slate-300 transition ">
          Create a Chat Room
        </button>
      </div>
    </>
  );
};

export default Home;

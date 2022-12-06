import logo from "./logo.svg";
import "./App.css";
import BrandCards from "./components/cloud/Test/BrandCards";

function App() {
  return (
    <div className="relative w-screen h-screen bg-gray-600 gap-5 ease-in duration-200">
      <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-10 rounded-lg shadow-xl w-80 absolute top-1 left-1">
        <h1 className="flex flex-row text-4xl text-gray-100 pb-10 font-roboto font-thin">
          <p className="pr-2 font-light">Tudu</p>App ®
        </h1>
      </div>
      <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-10 rounded-lg shadow-xl w-80 absolute left-1 top-1/4">
        <h1 className="flex flex-row text-4xl text-gray-100 pb-10 font-roboto font-thin">
          <p className="pr-2 font-light">Poject</p>App ®
        </h1>
      </div>
      {/* <div className="bg-purple-500 p-10 rounded-md shadow-xl absolute bottom-1 left-1">
        <BrandCards />
      </div> */}
    </div>
  );
}

export default App;

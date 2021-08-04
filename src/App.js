import './App.css';

function App() {
  return (
    <div className="flex h-screen">
      <div className="m-auto w-6/12 pricing">
        <div className="title-input w-full flex ">
          <label for="title" className="w-1/6 text-xl text-right pr-4">Title</label>
          <div className="w-5/6">
            <input type="text" className="w-full bg-gray-100 border-2 rounded-sm h-9 mb-6" />
            <div className="w-full flex mb-2">
              <label for="title" className="w-1/5 text-xl items-center">Add item</label>
              <input type="text" className="w-3/5 bg-gray-100 border-2 rounded-sm h-9 mr-3" />
              <button className="w-1/5 ml-1 border-2 rounded-md border-green-900 text-green-900 font-bold">Add</button>
            </div>

            <div className="w-full flex">
              <div className="w-full border-b-2 border-fuchsia-600 bg-white flex">
                <div className="p-4 w-1/6">
                  <img src="./images/check.svg" alt="Kiwi standing on oval border-2" />
                </div>
                <div className="w-5/6 p-4 flex justify-between">
                  <div className="text-gray-500">Wifi and stuff</div>
                  <button>
                    <img src="./images/x.svg" alt="Kiwi standing on oval border-2" />
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full flex">
              <div className="w-full border-b-2 border-fuchsia-600 bg-white flex">
                <div className="p-4 w-1/6">
                  <img src="./images/check.svg" alt="Kiwi standing on oval border-2" />
                </div>
                <div className="w-5/6 p-4 flex justify-between">
                  <div className="text-gray-500">Wifi and stuff</div>
                  <button>
                    <img src="./images/x.svg" alt="Kiwi standing on oval border-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import './App.css';
import { data } from './data'
import React, {useState} from 'react';
// import { useForm } from "react-hook-form";

function App() {
  const [listItem, setListItem] = useState('');
  const [list, setList] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    if(listItem){
      setList([...list, {id: new Date().getTime().toString(), name: listItem}]);
      setListItem('');
    }
    else {
      alert('Null');
    }
  }
  const removeItem = (id) => {
    setList(list.filter(item => item.id !== id)) 
  }
//  const [category, setCategory] = useState(data);
//  const { register, handleSubmit, setFocus, formState: { errors } } = useForm();
//  const onSubmit = (data) => {
//    if(data.listItem){
//     const listItem =  data.listItem
//     setCategory([...data], { id: new Date().getTime().toString(),listItem })
//      alert('Nice');
//    }
//  }
  return (
    <div className="flex h-screen">
      <div className="m-auto w-6/12 pricing">
        <div className="title-input w-full flex ">
          <label htmlFor="title" className="w-1/6 text-xl text-right pr-4">Title</label>
          <div className="w-5/6">
            <div>
              <input type="text"
                className="w-full bg-gray-100 border-2 rounded-sm h-9 mb-6"
                // {...register('listTitle', {required: 'Empty input'})}
              />
              {/* {errors.listTitle && <p className="text-red-900 text-xs bold">{errors.listTitle.message}</p>} */}
                
              <form
               className="w-full flex mb-2" 
               onSubmit={handleSubmit}
              >
                <label htmlFor="listItem" className="w-1/5 text-xl items-center">
                  Add item
                </label>
                <input
                 type="text" 
                 className="w-3/5 bg-gray-100 border-2 rounded-sm h-9 mr-3"
                 value={listItem}
                 onChange={(e)=> setListItem(e.target.value)}
                 />
                 {/* {...register('listItem', {required: 'Empty input'})} />
                 {errors.listItem && <p className="text-red-900 text-xs bold">{errors.listItem.message}</p>} */}
                <button type="submit" className="w-1/5 ml-1 border-2 rounded-md border-green-900 text-green-900 font-bold">Add</button>
              </form>
              {
              list.map(item => {
                const {id, name} = item;
                return (
                  <div className="w-full flex">
                    <div className="w-full border-b-2 border-fuchsia-600 bg-white flex">
                      <div className="p-4 w-1/6">
                        <img src="./images/check.svg" alt="Kiwi standing on oval border-2" />
                      </div>
                      <div className="w-5/6 p-4 flex justify-between">
                        <div className="text-gray-500" key={id}>{name}</div>
                        <button type="button" onClick={() => removeItem(id)}>
                          <img src="./images/x.svg" alt="Kiwi standing on oval border-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }) 
              }
              <input type="submit" value="Next" />
            </div>

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

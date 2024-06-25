import { FormEvent, useEffect, useState } from "react"

function App() {

  type Todos = {
    id?: number,
    title?: string,
    discription?: string,
  }
  
  const [adddata, setAdddata] = useState<Todos[]>([]);
  const [todo, setTodo] = useState<Todos>({
    id: 0,
    title: '',
    discription: '',
  });
  
  const addList = (e: FormEvent) => {
    e.preventDefault();
    // setTodo({
    //   id: Math.floor(Math.random() * 1000),
    // });
    setAdddata([...adddata, todo]);
  }

  const edit = (id: number) => {
    const newTodo = adddata.filter((item) => item.id !== id);
    setAdddata(newTodo);
  }

  const delet = (id: number) => {
    const newTodo = adddata.filter((item) => item.id !== id);
    setAdddata(newTodo);
  }

  return (
    <>
      <div className="max-w-[800px] h-[100%] m-auto flex flex-col">
        <div className="max-w-[800px] pt-[50px] rounded-t-[12px] pb-[20px] bg-primary flex gap-[20px] justify-center">
          <form className="flex flex-col gap-[5px]" onSubmit={addList}>
            <input onChange={(e) => setTodo((prev)=> ({...prev, title:e.target.value}))} type="text" placeholder="Title" className="input input-bordered w-full max-w-xs" />
            <textarea onChange={(e) => setTodo((prev)=> ({...prev, discription:e.target.value}))} placeholder="Discription" className="input input-bordered w-full max-w-xs" />
            <button type="submit" className='btn'>add list</button>
          </form>
        </div>
        {/* wrapper list */}
        <div className="flex flex-wrap max-w-[800px] gap-[10px] items-center justify-center bg-blue-700 rounded-b-[12px]">
          {adddata.map((item, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <div className="">
                <h2 className="card-title">{item.title}</h2>
              <p>{item.discription}</p>
              </div>
              <div className="card-actions justify-end">
                <button onClick={() => edit(item.id)} className="btn btn-primary">Edit</button>
                <button onClick={() => delet(item.id)} className="btn btn-primary">Delete</button>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

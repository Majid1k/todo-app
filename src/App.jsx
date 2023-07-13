import List from "./components/List";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  //console.log(list);
  const [value, setValue] = useState("");

  ////// Delete Handler
  const handleDelete = (id) => {
    setList(list.filter((u) => u.id !== id));
  };

  ////// Create/Submit
  const handleSubmit = (event) => {
    const task = {
      // Giving id to each item
      id: list.length === 0 ? 1 : list[list.length - 1].id + 1,
      taskName: value,
    };
    event.preventDefault();
    setList(task.taskName !== "" ? [...list, task] : list);
    setValue("");
  };

  ////// Update Handlar
  const handleUpdate = (i, update, handleClose) => {
    const updatedUser = { ...i, taskName: update };
    //console.log(i.id, update);
    setList(list.map((u) => (u.id === i.id ? updatedUser : u)));
    handleClose();
  };

  //  input field
  return (
    <>
      <div className="container-sm mt-5 text-center ">
        <h1>Get Things Done</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              required
              value={value}
              minLength={2}
              maxLength={20}
              type="text"
              className="form-control bg-body"
              placeholder="Write task here"
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="btn btn-outline-secondary" type="Submit">
              +
            </button>
          </div>
        </form>
        <List
          list={list}
          setList={setList}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
    </>
  );
}

export default App;

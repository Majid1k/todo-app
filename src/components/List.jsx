import { AiFillDelete } from "react-icons/ai";
import EditTask from "./EditTask";

const List = ({ list, handleDelete, handleUpdate }) => {
  return (
    <>
      {list.map((i) => (
        <div key={i.id} className="d-flex p-2 mt-3 border height">
          <div className="w-100 text-start">
            <p>{i.taskName}</p>
          </div>

          <div className="d-flex   ">
            <div>
              <AiFillDelete
                className="fs-3 hover"
                onClick={() => {
                  handleDelete(i.id);
                }}
              />
            </div>
            {/* editButton refers to React-Bootstrap Modal */}
            <div>
              <EditTask i={i} handleUpdate={handleUpdate} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;

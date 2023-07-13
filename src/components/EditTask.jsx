// React-Bootstrap Modal

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiFillEdit } from "react-icons/ai";

function EditTask({ i, handleUpdate }) {
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(i.taskName);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <AiFillEdit className="fs-3 edit hover" onClick={handleShow} />{" "}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="input-group">
              <input
                required
                minLength={2}
                maxLength={20}
                value={update}
                type="text"
                className="form-control bg-body"
                placeholder="Update task here"
                onChange={(e) => setUpdate(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button
            variant="primary"
            onClick={() => handleUpdate(i, update, handleClose)}
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;

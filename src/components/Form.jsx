import { useRef, useState } from "react";
import { Modal, Button } from "@mui/material";
import { validate } from "../utils/validate";
const Form = () => {
  const [contactInfo, setContactInfo] = useState({
    name: "default name",
    email: "default Email",
  });
  const [open, setOpen] = useState(false);
  const [valid, setValid] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const name = useRef();
  const handleEdit = () => {
    handleOpen();
  };

  const onSave = () => {
    const temp = {};
    temp.name = name.current.value;
    // temp.email = email.current.value;
    contactInfo.name = "asda";

    setContactInfo(contactInfo);
    handleClose();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValid(validate(value));
    setContactInfo((prevContactInfo) => ({
      ...prevContactInfo,
      [id]: value,
    }));
  };

  const styles = { bag: "blue" };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <span>{contactInfo.name}</span>

          <label htmlFor="email">Email:</label>
          <span>{contactInfo.email}</span>
        </div>
        <button type="button" onClick={handleEdit}>
          Edit
        </button>
        <Modal open={open} onClose={handleClose}>
          <div>
            <input
              ref={name}
              id="name"
              label="Name"
              value={contactInfo.name}
              onChange={handleChange}
            />
            <input
              id="email"
              label="Email"
              value={contactInfo.email}
              onChange={handleChange}
              className={valid && styles}
            />
            <Button variant="contained" onClick={onSave} fullWidth>
              Save
            </Button>
          </div>
        </Modal>
      </form>
    </div>
  );
};

export default Form;

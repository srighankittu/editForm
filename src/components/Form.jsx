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

  const email = useRef();

  const handleEdit = () => {
    handleOpen();
  };

  const onSave = () => {
    const temp = {};
    temp.name = email.current.value;
    // temp.email = email.current.value;
    contactInfo.name = "asda";

    setContactInfo(contactInfo);
    handleClose();
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValid(validate(value)); // Validate the email value
    setContactInfo((prevContactInfo) => ({
      ...prevContactInfo,
      [id]: value,
    }));
  };

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
              id="name"
              label="Name"
              value={contactInfo.name}
              onChange={handleChange}
            />
            <input
              ref={email}
              id="email"
              label="Email"
              value={contactInfo.email}
              onChange={handleChange}
              style={{
                border: valid ? "1px solid black" : "1px solid red",
                outline: "none",
              }}
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

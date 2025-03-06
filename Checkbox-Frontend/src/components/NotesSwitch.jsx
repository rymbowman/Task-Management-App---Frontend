import { Collapse } from "@mui/material";
import InputBox from "./InputBox";
import { useState } from "react";
import SwitchBtn from "./SwitchBtn";
import NotesIcon from "@mui/icons-material/Notes";
import PropTypes from "prop-types";
import { handleChange } from "./taskHelpers";

const NotesSwitch = ({ createTaskValues, setCreateTaskValues }) => {
  const [openNotesInput, setOpenNotesInput] = useState(false);

  return (
    <>
      <SwitchBtn
        name="notes"
        value={createTaskValues.notes}
        onChange={handleChange}
        icon={<NotesIcon />}
        labelText="Notes"
        onClick={() => setOpenNotesInput(!openNotesInput)}
      />
      <Collapse in={openNotesInput} timeout="auto">
        <InputBox
          label="Notes"
          name="notes"
          value={createTaskValues.notes}
          type="text"
          onChange={(e) => handleChange(e, setCreateTaskValues)}
          multiline={true}
          rows={4}
        />
      </Collapse>
    </>
  );
};
NotesSwitch.propTypes = {
  createTaskValues: PropTypes.object.isRequired,
  setCreateTaskValues: PropTypes.func.isRequired,
};
export default NotesSwitch;

import { Collapse, styled } from "@mui/material";
import InputBox from "../InputBox";
import { useState } from "react";
import SwitchBtn from "./SwitchBtn";
import NotesIcon from "@mui/icons-material/Notes";
import PropTypes from "prop-types";
import { handleChange } from "./taskHelpers";

const InputContainer = styled(Collapse)({
  width: "90%",
  margin: "auto",
});

const NotesSwitch = ({ createTaskValues, setCreateTaskValues }) => {
  const [openNotesInput, setOpenNotesInput] = useState(false);

  return (
    <>
      <SwitchBtn
        name="notes"
        icon={<NotesIcon />}
        labelText="Notes"
        openInput={openNotesInput}
        setOpenInput={setOpenNotesInput}
      />
      <InputContainer in={openNotesInput} timeout="auto">
        <InputBox
          label="Notes"
          name="notes"
          value={createTaskValues.notes}
          type="text"
          onChange={(e) => handleChange(e, setCreateTaskValues)}
          multiline={true}
          rows={4}
        />
      </InputContainer>
    </>
  );
};
NotesSwitch.propTypes = {
  createTaskValues: PropTypes.object.isRequired,
  setCreateTaskValues: PropTypes.func.isRequired,
};
export default NotesSwitch;

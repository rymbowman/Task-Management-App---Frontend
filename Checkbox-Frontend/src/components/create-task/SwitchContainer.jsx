import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import CategorySwitch from "./CategorySwitch";
import PrioritySwitch from "./PrioritySwitch";
import NotesSwitch from "./NotesSwitch";
import StepsSwitch from "./StepsSwitch";
import DateSwitch from "./DateSwitch";
import { useState } from "react";
import PropTypes from "prop-types";
import { FormGroup, styled } from "@mui/material";

const MainContainer = styled(FormGroup)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
  padding: "10px",
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
});

const SwitchContainer = ({ createTaskValues, setCreateTaskValues }) => {
  const [openDueDateInput, setOpenDueDateInput] = useState(false);
  const [openReminderInput, setOpenReminderInput] = useState(false);
  return (
    <MainContainer>
      <CategorySwitch
        createTaskValues={createTaskValues}
        setCreateTaskValues={setCreateTaskValues}
      />
      <PrioritySwitch
        createTaskValues={createTaskValues}
        setCreateTaskValues={setCreateTaskValues}
      />
      <NotesSwitch
        createTaskValues={createTaskValues}
        setCreateTaskValues={setCreateTaskValues}
      />
      <StepsSwitch
        createTaskValues={createTaskValues}
        setCreateTaskValues={setCreateTaskValues}
      />
      <DateSwitch
        name={"dueDate"}
        setCreateTaskValues={setCreateTaskValues}
        labelText={"Due Date"}
        setOpenInput={setOpenDueDateInput}
        openInput={openDueDateInput}
        iconImage={<CalendarMonthIcon />}
        label={"Set Due Date"}
      />
      <DateSwitch
        name={"reminder"}
        setCreateTaskValues={setCreateTaskValues}
        labelText={"Reminder Date"}
        setOpenInput={setOpenReminderInput}
        openInput={openReminderInput}
        iconImage={<NotificationAddIcon />}
        label={"Set Reminder Date"}
      />
    </MainContainer>
  );
};

SwitchContainer.propTypes = {
  createTaskValues: PropTypes.object.isRequired,
  setCreateTaskValues: PropTypes.func.isRequired,
};
export default SwitchContainer;

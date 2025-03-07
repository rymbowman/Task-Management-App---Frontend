import { Box, Collapse, styled } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SwitchBtn from "./SwitchBtn";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { handleDateChange } from "./taskHelpers";
import { useState } from "react";

const InputContainer = styled(Collapse)({
  width: "90%",
  margin: "auto",
});

const DateInput = styled(DateCalendar)({
  width: "100%",
});

const DateSwitch = ({
  name,
  setCreateTaskValues,
  labelText,
  setOpenInput,
  openInput,
  iconImage,
  label,
}) => {
  const [value, setValue] = useState(dayjs());

  const handleDateChangeInternal = (date) => {
    setValue(date);
    handleDateChange(name, date, setCreateTaskValues);
  };

  return (
    <Box>
      <SwitchBtn
        name={name}
        icon={iconImage}
        labelText={labelText}
        openInput={openInput}
        setOpenInput={setOpenInput}
      />
      <InputContainer in={openInput} timeout="auto">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box components={["DateField"]}>
            <DateInput
              label={label}
              value={value}
              onChange={handleDateChangeInternal}
              minDate={dayjs()}
            />
          </Box>
        </LocalizationProvider>
      </InputContainer>
    </Box>
  );
};

DateSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  setCreateTaskValues: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  setOpenInput: PropTypes.func.isRequired,
  openInput: PropTypes.bool.isRequired,
  iconImage: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};
export default DateSwitch;

import { Box, Collapse } from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SwitchBtn from "./SwitchBtn";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { handleDateChange } from "./taskHelpers";

const DateSwitch = ({
  name,
  createTaskValues,
  setCreateTaskValues,
  labelText,
  setOpenInput,
  openInput,
  iconImage,
  label,
}) => {
  return (
    <>
      <SwitchBtn
        name={name}
        value={createTaskValues ? { createTaskValues } : ""}
        icon={iconImage}
        labelText={labelText}
        onClick={() => setOpenInput(!openInput)}
      />
      <Collapse in={openInput} timeout="auto">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box components={["DateField"]}>
            <DateField
              label={label}
              value={createTaskValues ? dayjs({ createTaskValues }) : null}
              onChange={(date) =>
                handleDateChange(name, date, setCreateTaskValues)
              }
            />
          </Box>
        </LocalizationProvider>
      </Collapse>
    </>
  );
};

DateSwitch.propTypes = {
  name: PropTypes.string.isRequired,
  createTaskValues: PropTypes.object.isRequired,
  setCreateTaskValues: PropTypes.func.isRequired,
  labelText: PropTypes.string.isRequired,
  setOpenInput: PropTypes.func.isRequired,
  openInput: PropTypes.bool.isRequired,
  iconImage: PropTypes.element.isRequired,
  label: PropTypes.string.isRequired,
};
export default DateSwitch;

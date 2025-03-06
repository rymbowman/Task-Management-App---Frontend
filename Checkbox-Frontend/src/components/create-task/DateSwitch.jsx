import { Box, Collapse, styled } from "@mui/material";
import { DateField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SwitchBtn from "./SwitchBtn";
import dayjs from "dayjs";
import PropTypes from "prop-types";
import { handleDateChange } from "./taskHelpers";

const InputContainer = styled(Collapse)({
  width: "90%",
  margin: "auto",
});

const DateInput = styled(DateField)({
  width: "100%",
});

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
              value={createTaskValues ? dayjs({ createTaskValues }) : null}
              onChange={(date) =>
                handleDateChange(name, date, setCreateTaskValues)
              }
            />
          </Box>
        </LocalizationProvider>
      </InputContainer>
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

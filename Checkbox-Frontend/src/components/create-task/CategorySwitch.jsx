import { Box, Collapse, styled } from "@mui/material";
import SwitchBtn from "./SwitchBtn";
import InputBox from "../InputBox";
import CategoryIcon from "@mui/icons-material/Category";
import { useState } from "react";
import PropTypes from "prop-types";
import { handleChange } from "./taskHelpers";

const InputContainer = styled(Collapse)({
  width: "90%",
  margin: "auto",
});

const CategorySwitch = ({ createTaskValues, setCreateTaskValues }) => {
  const [openCategoryInput, setOpenCategoryInput] = useState(false);

  return (
    <Box>
      <SwitchBtn
        name="category"
        icon={<CategoryIcon />}
        labelText="Category"
        openInput={openCategoryInput}
        setOpenInput={setOpenCategoryInput}
      />
      <InputContainer in={openCategoryInput} timeout="auto">
        <InputBox
          label="Category"
          name="category"
          value={createTaskValues.category}
          type="text"
          onChange={(e) => handleChange(e, setCreateTaskValues)}
        />
      </InputContainer>
    </Box>
  );
};

CategorySwitch.propTypes = {
  createTaskValues: PropTypes.object.isRequired,
  setCreateTaskValues: PropTypes.func.isRequired,
};

export default CategorySwitch;

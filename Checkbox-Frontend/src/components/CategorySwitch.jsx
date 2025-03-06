import { Collapse } from "@mui/material";
import SwitchBtn from "./SwitchBtn";
import InputBox from "./InputBox";
import CategoryIcon from "@mui/icons-material/Category";
import { useState } from "react";
import PropTypes from "prop-types";
import { handleChange } from "./taskHelpers";

const CategorySwitch = ({ createTaskValues, setCreateTaskValues }) => {
  const [openCategoryInput, setOpenCategoryInput] = useState(false);

  return (
    <>
      <SwitchBtn
        name="category"
        value={createTaskValues.category}
        icon={<CategoryIcon />}
        labelText="Category"
        onClick={() => setOpenCategoryInput(!openCategoryInput)}
      />
      <Collapse in={openCategoryInput} timeout="auto">
        <InputBox
          label="Category"
          name="category"
          value={createTaskValues.category}
          type="text"
          onChange={(e) => handleChange(e, setCreateTaskValues)}
        />
      </Collapse>
    </>
  );
};

CategorySwitch.propTypes = {
  createTaskValues: PropTypes.object.isRequired,
  setCreateTaskValues: PropTypes.func.isRequired,
};

export default CategorySwitch;

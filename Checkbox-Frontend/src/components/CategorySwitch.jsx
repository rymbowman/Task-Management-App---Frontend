import { Collapse } from "@mui/material";
import SwitchBtn from "./SwitchBtn";
import InputBox from "./InputBox";
import CategoryIcon from "@mui/icons-material/Category";
import { useState } from "react";
import PropTypes from "prop-types";

const CategorySwitch = ({ createTaskValues, handleChange }) => {
  const [openCategoryInput, setOpenCategoryInput] = useState(false);

  return (
    <>
      <SwitchBtn
        name="category"
        value={createTaskValues.category}
        onChange={handleChange}
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
          onChange={handleChange}
        />
      </Collapse>
      ;
    </>
  );
};

CategorySwitch.propTypes = {
  createTaskValues: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CategorySwitch;

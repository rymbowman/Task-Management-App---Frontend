import { Collapse } from "@mui/material";
import SwitchBtn from "./SwitchBtn";
import InputBox from "./InputBox";
import CategoryIcon from "@mui/icons-material/Category";
import { useState } from "react";

const CategorySwitch = (createTaskValues, handleChange) => {
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

export default CategorySwitch;

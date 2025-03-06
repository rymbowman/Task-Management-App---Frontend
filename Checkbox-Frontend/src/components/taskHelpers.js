import dayjs from "dayjs";

export const handleChange = (e, setCreateTaskValues) => {
  const { name, value } = e.target;
  if (name === "priority") {
    const priorityValue = Math.max(0, Math.min(5, Number(value)));
    setCreateTaskValues((prevValues) => ({
      ...prevValues,
      [name]: priorityValue,
    }));
  } else {
    setCreateTaskValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }
};

export const handleDateChange = (name, date, setCreateTaskValues) => {
  setCreateTaskValues((prevValues) => ({
    ...prevValues,
    [name]: date ? dayjs(date).format("YYYY-MM-DD") : null,
  }));
};

export const handleAddStep = (
  newStep,
  setCreateTaskValues,
  setNewStep,
  createTaskValues
) => {
  if (newStep.trim() !== "") {
    setCreateTaskValues((prevValues) => ({
      ...prevValues,
      steps: [...prevValues.steps, newStep],
    }));
    console.log("New step added:", createTaskValues.steps);
    setNewStep("");
  }
};

export const handleDeleteStep = (
  index,
  setCreateTaskValues,
  createTaskValues
) => {
  setCreateTaskValues((prevValues) => ({
    ...prevValues,
    steps: prevValues.steps.filter((_, i) => i !== index),
  }));
  console.log("Step deleted:", createTaskValues.steps);
};

export const handleSubmit = (
  createTaskValues,
  setValidInput,
  setCreateTaskValues
) => {
  if (createTaskValues.title.trim() === "") {
    setValidInput(false);
  } else {
    console.log("Task created:", createTaskValues);
    setCreateTaskValues({
      title: "",
      description: "",
      category: "",
      dueDate: null,
      priority: "",
      steps: [],
      notes: "",
      reminder: null,
    });
  }
};

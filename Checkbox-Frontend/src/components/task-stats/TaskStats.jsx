const tableRows = [
  {
    id: 1,
    title: "Task 1",
    category: "Category 1",
    dueDate: "2021-10-10",
    status: "Completed",
  },
  {
    id: 2,
    title: "Task 2",
    category: "Category 2",
    dueDate: "2021-10-10",
    status: "Completed",
  },
  {
    id: 3,
    title: "Task 3",
    category: "Category 3",
    dueDate: "2021-10-10",
    status: "Completed",
  },
  {
    id: 4,
    title: "Task 4",
    category: "Category 4",
    dueDate: "2021-10-10",
    status: "Completed",
  },
  {
    id: 5,
    title: "Task 5",
    category: "Category 5",
    dueDate: "2021-10-10",
    status: "Completed",
  },
];

const headCells = [
  { id: "title", numeric: false, disablePadding: true, label: "Task" },
  { id: "category", numeric: false, disablePadding: false, label: "Category" },
  { id: "dueDate", numeric: false, disablePadding: false, label: "Due Date" },
  { id: "status", numeric: false, disablePadding: false, label: "Status" },
];

const TaskStats = () => {
  return <div>TaskStats</div>;
};

export default TaskStats;

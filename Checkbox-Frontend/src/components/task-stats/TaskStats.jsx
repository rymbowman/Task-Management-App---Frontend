import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import PageTracker from "./PageTracker";
import TableFilter from "./TableFilter";
import { useEffect, useState } from "react";

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
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    const categories = tableRows.map((row) => row.category);
    const uniqueCateoryList = [...new Set(categories)];
    setUniqueCategories(uniqueCateoryList);
  }, []);

  return (
    <TableContainer>
      <TableFilter uniqueCategories={uniqueCategories} />
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id}>{headCell.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell>{row.dueDate}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <PageTracker rowCount={tableRows.length} />
    </TableContainer>
  );
};

export default TaskStats;

import { TablePagination } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types";

const PageTracker = ({ rowCount }) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePageChange = (e, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TablePagination
      component="div"
      count={rowCount >= 10 ? rowCount : 10}
      page={page}
      onPageChange={handlePageChange}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleRowsPerPageChange}
    />
  );
};

PageTracker.propTypes = {
  rowCount: PropTypes.number.isRequired,
};

export default PageTracker;

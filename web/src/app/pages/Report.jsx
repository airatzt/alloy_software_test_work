import React from "react";
import { useQuery } from "react-query";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReportTable from "../components/ReportTable";

const Report = () => {
  const { isLoading, error, data } = useQuery("report", () =>
    fetch(process.env.REACT_APP_REPORT_URL).then((res) => res.json())
  );

  if (isLoading) return <CircularProgress disableShrink />;

  if (error) return "An error has occurred: " + error.message;

  return <ReportTable report={data} />;
};

export default Report;

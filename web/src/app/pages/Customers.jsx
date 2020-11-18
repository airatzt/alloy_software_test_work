import React from "react";
import { useQuery } from "react-query";
import CircularProgress from "@material-ui/core/CircularProgress";
import CustomersTable from "../components/CustomersTable";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Customers = () => {
  const history = useHistory();
  const { isLoading, error, data } = useQuery("customers", () =>
    fetch(process.env.REACT_APP_CUSTOMERS_URL).then((res) => res.json())
  );

  if (isLoading) return <CircularProgress disableShrink />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Button
        style={{ marginBottom: "20px" }}
        variant="contained"
        color="primary"
        onClick={() => {
          history.push("/add-customer");
        }}
      >
        Add customer
      </Button>
      <CustomersTable customers={data} />
    </div>
  );
};

export default Customers;

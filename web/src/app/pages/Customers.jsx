import React from "react";
import { useQuery } from "react-query";
import CircularProgress from "@material-ui/core/CircularProgress";
import CustomersTable from "../components/CustomersTable";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Customers = () => {
  const history = useHistory();
  const classes = useStyles();
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch(process.env.REACT_APP_API_URL).then((res) => res.json())
  );

  if (isLoading) return <CircularProgress disableShrink />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <>
      <div className={classes.root}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            history.push("/add-customer");
          }}
        >
          Add customer
        </Button>
      </div>
      <CustomersTable customers={data} />
    </>
  );
};

export default Customers;

import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import { useHistory,  useParams } from "react-router-dom";
import { useQueryCache, useMutation } from "react-query";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),

  city: yup.string("Enter your city").required("City is required"),

  anmount: yup.number("Enter your anmount").required("Anmount is required"),
});

const AddCustomer = () => {
  const history = useHistory();
  const { customerName } = useParams();

  const [mutate, { status, data, error }] = useMutation((editedCustomer)=>{
    fetch(process.env.REACT_APP_CUSTOMERS_URL+"/"+customerName, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedCustomer),
    })
  })

  const cache = useQueryCache();
  const customer = cache
    .getQueryData("customers").find((x) => x.name === customerName);
  const formik = useFormik({
    initialValues: customer,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let customer = { ...values };
      customer.anmount = Number(values.anmount);
      mutate(customer);

    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="city"
          name="city"
          label="City"
          type="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.city)}
          helperText={formik.touched.city && formik.errors.city}
        />
        <TextField
          fullWidth
          id="anmount"
          name="anmount"
          label="Anmount"
          type="anmount"
          value={formik.values.anmount}
          onChange={formik.handleChange}
          error={formik.touched.city && Boolean(formik.errors.anmount)}
          helperText={formik.touched.anmount && formik.errors.anmount}
        />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          style={{ marginTop: "20px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddCustomer;

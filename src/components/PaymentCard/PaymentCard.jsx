import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Typography, Button } from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";
import CreditCardInput from "react-credit-card-input";

const PaymentCard = () => {
  const methods = useForm();
  return (
    <div style={{ paddingLeft: "80px", backgroundColor: "#43464B" }}>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={3}>
            <Grid xs={6} style={{ paddingTop: "50px" }}>
              <Typography variant="subtitle2">Card Type </Typography>
            </Grid>
            <Grid xs={6} style={{ paddingTop: "50px" }}>
              <Typography variant="subtitle2">Mastercard </Typography>
            </Grid>
            <Grid xs={12} style={{ paddingTop: "50px" }}>
              <Typography variant="subtitle2"> Name on Card</Typography>
            </Grid>
            <Grid xs={12}>
              <FormInput required name="firstName" label="First name" />
            </Grid>
            <Grid xs={12} style={{ paddingTop: "50px" }}>
              <Typography variant="subtitle2"> Enter Card Details</Typography>
            </Grid>
            <Grid xs={12}>
              <CreditCardInput fieldClassName="input" />
            </Grid>
            <Grid
              justifyContent="center"
              style={{ padding: "50px 0px 50px 120px" }}
            >
              <Button type="submit" variant="contained" color="primary">
                Checkout
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};

export default PaymentCard;

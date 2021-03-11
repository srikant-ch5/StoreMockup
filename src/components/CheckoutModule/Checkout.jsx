import React, { Component } from "react";
import { connect } from "react-redux";
import { list } from "../../MockData/MockProducts";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  cardDetails,
  Typography,
  Grid,
  Button,
  Divider,
  Box,
} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import PaymentCard from "../PaymentCard/PaymentCard";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { get_products } from "../../actions/ProductsActionService";

export class Checkout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <Typography
          variant="body2"
          style={{ padding: "20px 0px", fontWeight: "500", fontSize: "20px" }}
          gutterBottom
        >
          Shopping Cart{" "}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            {this.props.finalProducts.map((product) => (
              <Grid item xs={12} style={{ padding: "20px 5px" }}>
                <Card>
                  {/*<div style={{ width: "220px", height: "320px" }}>
                <CardMedia
                  style={{
                    paddingTop: "56.25%",
                    justifyContent: "flex-start",
                  }}
                  image={product.image}
                />          
                </div> */}
                  <Grid container display="flex">
                    <Grid
                      style={{ padding: "20px 0px 0px 20px", width: "60px" }}
                      item
                    >
                      <Avatar alt="Item" src={product.image} />
                    </Grid>

                    <div>
                      <CardContent>
                        <Grid
                          item
                          style={{ padding: "0px 10px", display: "flex" }}
                        >
                          <div style={{ width: "100%" }}>
                            <Box
                              display="flex"
                              p={1}
                              bgcolor="background.paper"
                            >
                              <Box p={1} flexGrow={1}>
                                <Typography
                                  style={{
                                    padding: "2px 0px 0px 10px",
                                    fontWeight: "500",
                                  }}
                                  variant="body2"
                                  gutterBottom
                                >
                                  {product.name}
                                </Typography>
                              </Box>
                              <Box
                                display="flex"
                                style={{ paddingLeft: "120px" }}
                                p={1}
                              >
                                <Button
                                  type="button"
                                  size="small"
                                  onClick={() =>
                                    this.props.DecrementItem(product)
                                  }
                                >
                                  -
                                </Button>
                                <Typography style={{ paddingTop: "3px" }}>
                                  {product.quantity}
                                </Typography>
                                <Button
                                  type="button"
                                  size="small"
                                  onClick={() =>
                                    this.props.IncrementItem(product)
                                  }
                                >
                                  +
                                </Button>
                              </Box>
                              <div style={{ paddingTop: "5px" }}>
                                <Box p={1}>{product.TotalPrice.toFixed(2)}</Box>
                              </div>
                              <Button
                                type="button"
                                size="small"
                                onClick={() => this.props.RemoveItem(product)}
                              >
                                X
                              </Button>
                            </Box>
                          </div>
                          <Grid alignItems="center"></Grid>
                        </Grid>
                      </CardContent>
                    </div>
                  </Grid>
                </Card>

                <Divider />
              </Grid>
            ))}

            <Grid container>
              <Grid style={{ display: "flex" }} item xs={6}>
                <KeyboardBackspaceIcon style={{ paddingTop: "2px" }} />
                <Typography
                  variant="body2"
                  style={{ padding: "2px 0px 0px 20px", fontWeight: "500" }}
                >
                  Continue Shopping
                </Typography>
              </Grid>
              <Grid style={{ padding: "0px 10px 0px 200px" }} item xs={6}>
                <Typography>Total : $ {this.props.CheckoutPrice} </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <PaymentCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);

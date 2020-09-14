import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { SendRounded } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import {
  Telegram,
  Instagram,
  Facebook,
  GitHub,
  LinkedIn,
  YouTube
} from "@material-ui/icons";
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  OutlinedInput,
  InputAdornment,
  Button
} from "@material-ui/core";
import Navbar from "../navbar";
import Card from "../cards";
import ImgCard from "../imgcard/imgcard";
import Footer from "../footer/footer";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div
          className="back-img"
          style={{
            backgroundImage:
              "url('https://static.dribbble.com/users/192276/screenshots/2500960/attachments/491748/midnightinthevalley-2560x1440.png')"
          }}
        >
          <Navbar />
          <div className="p-2 text-light float-left heading">Albokotech</div>
          <div
            style={{ "padding-top": "14rem" }}
            className="text-center text-white"
          >
            <h2>Complete digital solution</h2>
          </div>
        </div>
        <div />
        <div style={{ backgroundColor: "#f3f3f3" }} className="mt-5">
          <div className=" text-center p-5 animated fadeInUp">
          <div className="  bg-white p-2">
            <h1 className="heading">We'd love to hear from you!</h1>

            <div className="">
              <form id="query" >
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <FormControl fullWidth className="mb-2">
                    <InputLabel htmlFor="my-input">Name</InputLabel>
                    <Input required="true" name="Name" />
                  </FormControl>
                  <FormControl fullWidth className="mb-2">
                    <InputLabel htmlFor="my-input">Email address</InputLabel>
                    <Input required="true" type="email" name="Email" />
                  </FormControl>
                  <FormControl fullWidth className="mb-2">
                    <InputLabel htmlFor="my-input">Contact Number</InputLabel>
                    <Input required="true" name="ContactNum" />
                  </FormControl>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 pt-3">
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">
                      Your requirement
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                      name="Requirement"
                      placeholder="Enter Your Requirement"
                    />
                                      <br />
                                      </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 pt-3"></div>
                <div className="col-lg-4 col-md-6 col-sm-12 pt-3">
                <Button
                      variant="contained"
                      style={{ backgroundColor: "orange" }}
                      fullWidth
                    >
                      Send Query <SendRounded />
                    </Button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 pt-3"></div>

              </form>
            </div>
            </div>
          </div>
        </div>
        <div className="p-4" style={{ backgroundColor: "#f3f3f3" }}>
          <div className="p-4 bg-white text-center">
            <h2 class="heading  pt-5 pb-5">Contact us on</h2>
            <div className="row mb-5">
              <div className="col-2">
                <IconButton size="medium"
                  className="p-1"
                  style={{ backgroundColor: "rgb(19 146 222)", color: "white" }}
                >
                  <Telegram />
                </IconButton>
              </div>
              <div className="col-2">
                <IconButton size="medium"
                  className="p-1"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                    color: "white"
                  }}
                >
                  <Instagram />
                </IconButton>
              </div>{" "}
              <div className="col-2">
                <IconButton size="medium"
                  className="p-1"
                  style={{ backgroundColor: "rgb(19 146 222)", color: "white" }}
                >
                  <Facebook />
                </IconButton>
              </div>{" "}
              <div className="col-2">
                <IconButton size="medium"
                  className="p-1"
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <GitHub />
                </IconButton>
              </div>
              <div className="col-2">
                <IconButton size="medium"
                  className="p-1"
                  style={{ backgroundColor: "rgb(19 146 222)", color: "white" }}
                >
                  <LinkedIn />
                </IconButton>
              </div>
              <div className="col-2">
                <IconButton size="medium"
                  className="p-1"
                  style={{ backgroundColor: "red", color: "white" }}
                >
                  <YouTube />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default Contact;

import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "../../../UI/Button/Button";
import { Paper, TextField } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import classes from "./BookingForm.module.css";
import { useDispatch } from "react-redux";
import { contactUs } from "../../../../store/Actions/TourActions";
import { Alert } from "@material-ui/lab";

const ContactForm = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    setError("");
    setMessage("");
  };

  const MessageFormSubmitHandler = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    if (values.name.length < 1) {
      return setError("Name(s) required");
    }
    if (values.phone.length < 1) {
      return setError("Phone number required");
    }
    if (values.email.length < 1) {
      return setError("Email required");
    }
    if (values.message.length < 1) {
      return setError("Please message is required");
    }

    if (values.email !== "undefined") {
      setError("");
      let pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(values.email)) {
        setError("Please enter valid email address.");
      }
    }
    try {
      await dispatch(
        contactUs(values.name, values.email, values.phone, values.message)
      );
      setIsLoading(false);
      // return <Link to="/thank-you" />
      setMessage(
        "Message Sent Successfully, Dav Safaris will contact you shortly"
      );
      setValues({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      navigate("/thank-you");
    } catch (error) {
      setIsLoading(false);
      return setError(
        "Failed to send message, Please reflesh the page and try again!"
      );
    }
  };

  return (
    <Paper className={classes.dav__contact_us_form_wrapper}>
      <div className={classes.dav__book_tour_title}>
        <h2>Let's Talk</h2>
      </div>
      {error && (
        <div className="d-flex justify-content-center mb-3">
          <Alert severity="error">{error}</Alert>
        </div>
      )}
      {message && (
        <div className="d-flex justify-content-center mb-3">
          <Alert severity="success">{message}</Alert>
        </div>
      )}
      <Form onSubmit={MessageFormSubmitHandler}>
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          name="name"
          value={values.name}
          onChange={handleOnChange}
          placeholder="Full Names"
          className={classes.dav__booking_form_field}
        />
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          type="email"
          name="email"
          value={values.email}
          onChange={handleOnChange}
          placeholder="Email"
          className={classes.dav__booking_form_field}
        />
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          type="number"
          name="phone"
          value={values.phone}
          onChange={handleOnChange}
          placeholder="Phone Number"
          className={classes.dav__booking_form_field}
        />
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          multiline
          minRows={4}
          placeholder="Message"
          name="message"
          value={values.message}
          onChange={handleOnChange}
          className={classes.dav__booking_form_field}
        />

        <Button
          className="btns"
          type="submit"
          buttonStyle="btn--primary"
          buttonSize="Btn--fullWidth"
        >
          {isLoading ? "Sending..." : "Send"}
        </Button>
      </Form>
    </Paper>
  );
};

export default ContactForm;

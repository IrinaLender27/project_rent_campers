import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useId } from "react";
import css from "./BookForm.module.css";
import { ButtonShow } from "../../../shared/components/ButtonShow/ButtonShow";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  bookingDate: yup.date(),
});

export const BookForm = () => {
  const nameId = useId();
  const emailId = useId();
  const bookingId = useId();
  return (
    <div className={css.formContainer}>
      <h3 className={css.tittle}>Book your campervan now</h3>
      <p className={css.coment}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log(values);
          actions.resetForm();
          window.location.reload();
        }}
      >
        <Form>
          <div className={css.formWrapper}>
            <Field
              className={css.inputForm}
              id={nameId}
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage className={css.error} name="name" component="span" />

            <Field
              className={css.inputForm}
              id={emailId}
              type="tel"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage className={css.error} name="email" component="span" />

            <Field
              className={css.inputForm}
              id={bookingId}
              type="date"
              name="bookingDate"
              placeholder="Booking Data"
              style={{ color: "grey" }}
            />
            <ErrorMessage
              className={css.error}
              name="bookingDate"
              component="span"
            />
            <Field
              className={css.inputForm}
              style={{ height: "114px" }}
              id="comment"
              name="comment"
              as="textarea"
              placeholder="Comment"
            />
          </div>
          <button className={css.btn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

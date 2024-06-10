import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { useId } from "react";
import css from "./BookForm.module.css";
const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  bookingDate: yup.date(),
});

export const BookForm = ({ onSubmit }) => {
  const nameId = useId();
  const emailId = useId();
  const bookingId = useId();
  return (
    <Formik
      initialValues={{ name: "", email: "", bookingDate: "", comment: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      <Form>
        <div>
          <lable htmlFor={nameId}>Name</lable>
          <Field
            className={css.inputForm}
            id={nameId}
            type="text"
            name="name"
          />
          <ErrorMessage className={css.error} name="name" component="span" />
          <lable htmlFor={emailId}>Email</lable>
          <Field
            className={css.inputForm}
            id={emailId}
            type="tel"
            name="number"
          />
          <ErrorMessage className={css.error} name="email" component="span" />
          <lable htmlFor={bookingId}>Booking Data</lable>
          <Field
            className={css.inputForm}
            id={bookingId}
            type="date"
            name="bookingDate"
          />
          <ErrorMessage
            className={css.error}
            name="bookingDate"
            component="span"
          />
          <label htmlFor="comment">Comment</label>
          <Field id="comment" name="comment" as="textarea" />
        </div>
        <button className={css.btn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import css from "./SearchBar.module.css";

function SearchBar({ handeSeacrh, toast }) {
  return (
    <Formik
      initialValues={{
        seacrh: "",
      }}
      onSubmit={(values, actions) => {
        if (values.seacrh === "") {
          toast.error("Please Enter the text");
          return;
        }

        handeSeacrh(values.seacrh);
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <Field
          type="text"
          name="seacrh"
          id="seacrh"
          className={css.input}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit" className={css.button}>
          Seacrh
        </button>
      </Form>
    </Formik>
  );
}

SearchBar.propTypes = {
  handeSeacrh: PropTypes.func.isRequired,
  toast: PropTypes.func.isRequired,
};
export default SearchBar;

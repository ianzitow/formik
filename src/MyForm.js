import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import Choose from './Choose';
import Project from './Project';

// Our inner form component which receives our form's state and updater methods as props
const InnerForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting,
}) => (
    <form className="simple_form form-box" id="new_contact" noValidate="novalidate" acceptCharset="UTF-8" onSubmit={handleSubmit}>
        <input 
            name="utf8" 
            type="hidden" 
            value="✓" 
        />
        <input 
            type="hidden" 
            name="authenticity_token" 
            value="6qtJXNEB7YeC0E0VlR+IjR4aqHjuee8q+UAwY11oAfINKQ8oaop6R90/R6Mta5pE693R9JyVLCSTqdsoDyxDZg==" 
        />
        <Choose values={values} handleChange={handleChange} handleBlur={handleBlur} />

        {values.status === 'project' ? <Project values={values} handleChange={handleChange} handleBlur={handleBlur} errors={errors} touched={touched} /> : null}
        
        <button type="submit" disabled={isSubmitting} className="btn">
            Enviar
        </button>
    </form>
);

const schema = yup.object().shape({
    email: yup.string().email('E-mail is not valid!').required('E-mail is required!'),
    name: yup.string().required('O nome é obrigatório.').min(3, 'O nome deve ter pelo menos 3 caracteres.'),
    phone: yup.string().matches(/\(?\+[0-9]{1,3}\)? ?-?[0-9]{1,3} ?-?[0-9]{3,5} ?-?[0-9]{4}( ?-?[0-9]{3})?/),
    message: yup.string().required('A mensagem é obrigatória.')
});

// Wrap our form with the using withFormik HoC
const MyForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: props => ({ email: '', password: '' }),
  // Add a custom validation function (this can be async too!)
  validationSchema: schema,
  // Submission handler
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    }
  ) => {
      debugger;
    // LoginToMyApp(values).then(
    //   user => {
    //     setSubmitting(false);
    //     // do whatevs...
    //     // props.updateUser(user)
    //   },
    //   errors => {
    //     setSubmitting(false);
    //     // Maybe even transform your API's errors into the same shape as Formik's!
    //     setErrors(transformMyApiErrors(errors));
    //   }
    // );
  },
})(InnerForm);

export default MyForm;
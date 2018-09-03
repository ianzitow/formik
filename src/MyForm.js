import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';

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
        <div>
            <label>
                <input
                    name="status"
                    type="radio"
                    value="idea"
                    checked={values.status === 'idea'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                Ideia
            </label>
            <label>
                <input
                    name="status"
                    type="radio"
                    value="project"
                    checked={values.status === 'project'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                Projeto escrito
            </label>
            <label>
                <input
                    name="status"
                    type="radio"
                    value="site"
                    checked={values.status === 'site'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                Site
            </label>
            <label>
                <input
                    name="status"
                    type="radio"
                    value="app"
                    checked={values.status === 'app'}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                Aplicativo já desenvolvido
            </label>
        </div>
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
        <div className="input string optional contact_name form-group">
            <label className="string optional" htmlFor="contact_name">
                Name
            </label>
            <input 
                className="string optional" 
                type="text" 
                name="name" 
                id="contact_name"  
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
            />
            {touched.name && errors.name && <div>{errors.name}</div>}
        </div>
        <div className="input email optional contact_email form-group">
            <label className="email optional" htmlFor="contact_email">
                Email
            </label>
            <input 
                className="string email optional" 
                type="email" 
                name="email" 
                id="contact_email" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
        </div>
        <div className="input tel optional contact_phone form-group">
            <label className="tel optional" htmlFor="contact_phone">Phone</label>
            <input 
                className="string tel optional" 
                type="tel" 
                name="phone" 
                id="contact_phone" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
            />
            {touched.phone && errors.phone && <div>{errors.phone}</div>}
        </div>
        <div className="input text optional contact_message form-group">
            <label className="text optional" htmlFor="contact_message">Message</label>
            <textarea 
                className="text optional" 
                name="message" 
                id="contact_message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
            >
            </textarea>
            {touched.message && errors.message && <div>{errors.message}</div>}
        </div>
        {values.color === 'blue' ? 'Oi AZUL' : null}
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
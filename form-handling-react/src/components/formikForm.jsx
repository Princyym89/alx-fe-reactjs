import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('Form submitted with Formik:', values);
    // Here you would typically make an API call
    alert('User registered successfully with Formik!');
    
    setSubmitting(false);
    resetForm();
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px' }}>
      <h2>User Registration (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="username" style={{ display: 'block', marginBottom: '5px' }}>
                Username:
              </label>
              <Field
                type="text"
                id="username"
                name="username"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
              <ErrorMessage
                name="username"
                component="p"
                style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
              <ErrorMessage
                name="email"
                component="p"
                style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}
              />
            </div>

            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="password" style={{ display: 'block', marginBottom: '5px' }}>
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
              <ErrorMessage
                name="password"
                component="p"
                style={{ color: 'red', fontSize: '14px', margin: '5px 0 0 0' }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#28a745',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              Register with Formik
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;

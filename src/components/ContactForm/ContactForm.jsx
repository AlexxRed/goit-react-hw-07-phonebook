import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import { schema } from '../../constants/validationSchema';
// import { nanoid } from 'nanoid';
// import { useDispatch} from 'react-redux';
// import { addContact} from '../../redux/contactsSlice';
import { MainForm, Label, InputForm, ButtonAdd } from './ContactForm.styled';
import { useAddNewContactMutation } from '../../redux/contactsSlice';


const renderError = message => <p>{message}</p>;

function ContactForm() {
  // const dispatch = useDispatch();

  const [addNewContact] = useAddNewContactMutation();
  //, {isLoading}


  const initialValues = {
    name: '',
    number: '',
  };
  
  const handleSubmit = ({name, number}, { resetForm }) => {
    const newContact = {
      // id: nanoid(),
      name,
      number,
    };
    
    // dispatch(addContact(newContact));
    resetForm();
    return addNewContact(newContact) 
    
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <MainForm autoComplete="off">
        <Label htmlFor="name">Name</Label>
        <InputForm name="name" type="text" placeholder="Enter name" />
        <ErrorMessage name="name" render={renderError} />
        <Label htmlFor="number">Number</Label>
        <InputForm name="number" type="tel" placeholder="Enter phone number" />
        <ErrorMessage name="number" render={renderError} />
        <ButtonAdd type="submit">Add contact</ButtonAdd>
      </MainForm>
    </Formik>
  );
}

export default ContactForm
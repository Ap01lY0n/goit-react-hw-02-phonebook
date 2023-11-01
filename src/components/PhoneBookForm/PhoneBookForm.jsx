import { Formik } from 'formik';
import Notiflix from 'notiflix';
import * as Yup from 'yup';
import {ContactsBookForm, Text, ContactsBookInput, SubmitBtn, ValidationError} from './PhoneBookForm.styled';

const PhoneBookSchema = Yup.object().shape({
  name: Yup.string().min(3, 'To short!').required('This field is required!'),
  number: Yup.string()
    .min(6, 'Too short!')
    .max(9, 'Too long!')
    .required('This field is required!'),
});

export const PhoneBookForm = ({ onAddContact, contacts }) => {
  return (
    <Formik
    initialValues={{
      name: '',
      number: '',
    }}
    validationSchema={PhoneBookSchema}
    onSubmit={(value, helper) => {
      const contactByName = contacts.find(contact => contact.name === value.name);
      if (contactByName) {
        return Notiflix.Notify.failure(`${value.name} is already in contacts.`);
      }
      const contactByNumber = contacts.find(contact => contact.number === value.number);
      if (contactByNumber) {
        return Notiflix.Notify.failure(`${value.number} is already in contacts.`);
      }
      onAddContact(value);
      helper.resetForm();
    }}
    >
      <ContactsBookForm>
        <label>
          <Text>Name-Surname:</Text>
          <ContactsBookInput name="name" placeholder="Yaroslav Harkavec" />
          <ValidationError name="name" component="span" />
        </label>

        <label>
          <Text>Number:</Text>
          <ContactsBookInput
            type="text"
            name="number"
            placeholder="111-11-11"
          />
          <ValidationError name="number" component="span" />
        </label>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </ContactsBookForm>
    </Formik>
  );
};
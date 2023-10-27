import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const ContactsBookForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const ContactsBookInput = styled(Field)`
  margin-left: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 20px;
  width: 300px;
  height: 35px;
  display: flex;
`;

export const Text = styled.p`
  padding-left: 20px;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  font-weight: 600;
`;

export const SubmitBtn = styled.button`
  width: 250px;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid gray;
  background-color: white;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const ValidationError = styled(ErrorMessage)`
  margin-left: 20px;
  color: red;
`;
import { useState } from 'react';
import styled from 'styled-components';
import {
  useGetAllContactsQuery,
  useAddContactMutation,
} from 'redux/services/contacts-slice';
import doesContactExists from 'utils/does-contact-exists';
import { Button } from 'components/Button/Button';

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 250px;
  margin-bottom: 35px;
`;
export const Input = styled.input`
  max-width: 380px;
  width: 100%;
  padding: 10px;
  font-size: 22px;
  line-height: 1.25;
  color: #495057;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  &::placeholder {
    font-size: 16px;
  }
`;

export function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetAllContactsQuery();
  const [addContact, { isSuccess }] = useAddContactMutation();

  const handleStateChange = ({ currentTarget: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const resetFields = () => {
    setNumber('');
    setName('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (doesContactExists(contacts, name, number)) {
      return;
    }
    addContact({ name, number });
    resetFields();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        onChange={handleStateChange}
        value={name}
        style={{ marginRight: '40px' }}
        placeholder="Enter Name and Surname (e.g. 'John Smith')"
        required
      />
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        onChange={handleStateChange}
        value={number}
        placeholder="Enter Phone Number (e.g. '+380 50 555 55 55')"
        required
      />
      <Button text={'Add contact'} />
    </Form>
  );
}

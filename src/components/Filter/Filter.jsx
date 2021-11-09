import { useState } from 'react';
import Loader from 'react-loader-spinner';

import { Input } from 'components/ContactsForm/ContactsForm';
import ContactsList from 'components/ContactsList/ContactsList';
import { useGetAllContactsQuery } from 'redux/services/contacts-slice';
import filterContacts from 'utils/filter-contacts';

export default function Filter() {
  const [inputValue, setInputValue] = useState('');
  const { isFetching: isLoading, data: contacts } = useGetAllContactsQuery();
  const filteredContacts = filterContacts(contacts, inputValue);

  return (
    <>
      {contacts?.length > 0 && (
        <>
          <Input
            type="text"
            name="filter"
            value={inputValue}
            id="my-contacts"
            onChange={({ target: { value } }) => setInputValue(value)}
            style={{
              margin: '0 auto',
              display: 'block',
              marginTop: '70px',
            }}
            placeholder="Search Contacts"
          />

          <ContactsList filteredContacts={filteredContacts} />
        </>
      )}
    </>
  );
}

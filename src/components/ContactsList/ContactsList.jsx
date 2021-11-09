import styled from 'styled-components';
import ContactsListItem from 'components/ContactsListItem';

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 0;
`;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  width: 550px;
  font-size: 20px;
  color: #495057;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export default function ContactsList({ filteredContacts }) {
  return (
    <>
      {filteredContacts.length > 0 ? (
        <Ul>
          {[...filteredContacts]
            .sort((contactA, contactB) =>
              contactA.name.localeCompare(contactB.name),
            )
            .map(contact => (
              <Li key={contact.id}>
                <ContactsListItem contact={contact} />
              </Li>
            ))}
        </Ul>
      ) : (
        <p
          style={{
            color: '#495057',
            fontSize: '20px',
            textAlign: 'center',
            padding: '40px',
          }}
        >
          Sorry, no contacts found
        </p>
      )}
    </>
  );
}

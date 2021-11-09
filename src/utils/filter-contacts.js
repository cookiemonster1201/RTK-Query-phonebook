export default function filterContacts(contacts, filterValue) {
  return contacts?.length > 0
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filterValue.trim().toLowerCase()),
      )
    : [];
}

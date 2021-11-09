export default function doesContactExists(contacts, name, number) {
  const isContactExisting = contacts.some(
    contact => name === contact.name || number === contact.number,
  );
  if (isContactExisting) {
    alert(`${name} is already in contacts`);
    return true;
  } else {
    return false;
  }
}

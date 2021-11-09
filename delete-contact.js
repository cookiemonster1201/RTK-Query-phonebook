export default function deleteContact(allContacts, numberToDelete) {
  const updatedContacts = allContacts.filter(
    ({ number }) => numberToDelete !== number,
  );
  return [...updatedContacts];
}

export default function deleteContactById(allContacts, toBeDeletedId) {
  const updatedContacts = allContacts.filter(({ id }) => id !== toBeDeletedId);
  return [...updatedContacts];
}

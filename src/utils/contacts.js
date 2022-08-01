export const getContact = (id, contacts) => {
    const contact = contacts.find(contact => Number(contact.id) === Number(id))
    //console.log('found', contact)
    return contact
}
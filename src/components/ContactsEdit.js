import { useState, useEffect } from "react"
import { useNavigate,useParams } from "react-router-dom";

import { ContactsForm } from "./ContactsForm";

import { 
  contact, 
  fetchData, 
  apiURL, 
  Paths, 
  UIText,
  getContact } from '../utils'

export const ContactsEdit = (props) => {

  const { setContacts, contacts } = props

  const [changedContact, setChangedContact] = useState(contact)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  const editContact = (data) => {

    const thisId = Number(id)

    if ( Number(data.id) === thisId ) {

      const contactData = contacts.map(contact => {
        if (Number(contact.id) === thisId) {
          return changedContact
        } else {
          return contact
        }
      })
      setContacts(contactData)
      navigate(Paths.home)
    }
  }

  useEffect(() => {
    const contact = getContact(id, contacts)
    setChangedContact(contact)    
    
  }, [id])

  useEffect(() => {

    if (hasSubmitted) {

      //console.log('submit changed', changedContact)
      const fetchOptions = {
        method: 'PUT',
        headers: {
          "Content-Type": 'application/json'
        },
        body: JSON.stringify(changedContact)
      }

      const fetchDataParams = {
        url: `${apiURL}/${id}`,
        options: fetchOptions,
        cb: editContact
      }

      fetchData(fetchDataParams)

    }
  }, [hasSubmitted])

  const handleChange = event => {
    const { name, value } = event.target
    const contactData = {...changedContact, [name]: value}
    setChangedContact(contactData)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    setHasSubmitted(true)
  }

  return (
    <ContactsForm settings={{
      heading: UIText.contactEditTitle, 
      buttonText: UIText.contactEditButton, 
      value: changedContact, 
      handleChange: handleChange, 
      handleSubmit: handleSubmit
    }} />
  )
}

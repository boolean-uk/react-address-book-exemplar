import { useState, useEffect } from "react"
import { useNavigate,useParams } from "react-router-dom";

import { 
  contact, 
  fetchData, 
  apiURL, 
  Paths, 
  UIText, 
  getContact 
} from '../utils'

export const ContactsDelete = (props) => {

  const { setContacts, contacts } = props

  const [deletedContact, setDeletedContact] = useState(contact)
  const [doDelete, setDoDelete] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  const deleteContact = (data) => {

    const contactData = contacts.filter(contact => Number(contact.id) !== Number(id))
    setContacts(contactData)
    navigate(Paths.home)
  }

  useEffect(() => {
    const contact = getContact(id, contacts)
    setDeletedContact(contact)    
    
  }, [id])

  useEffect(() => {

    if (doDelete) {

      const fetchOptions = {
        method: 'DELETE'
      }

      const fetchDataParams = {
        url: `${apiURL}/${id}`,
        options: fetchOptions,
        cb: deleteContact
      }

      fetchData(fetchDataParams)

    }
  }, [doDelete])

  const handleDelete = () => {
    setDoDelete(true)
  }
  const handleNoDelete = () => {
    navigate(Paths.home)
  }

  return (
    <>
      <h2>{UIText.contactDeleteTitle}</h2>
      {
        deletedContact ? (

          <>
            
            <p>{deletedContact.firstName} {deletedContact.lastName}</p>
            <p>{deletedContact.street} {deletedContact.city}</p>

            <p>{UIText.contactDeleteConfirm}</p>

            <button className="delete" onClick={handleDelete}>Yes</button>
            <button className="delete" onClick={handleNoDelete}>No</button>
          </>

        ) : (

          <>
            <p>No such contact...</p>
          </>
        )
      }
    </>
  )
}

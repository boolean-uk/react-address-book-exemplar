import { useParams } from "react-router-dom"
import { UIText, getContact } from "../utils"

export const ContactsView = (props) => {

  const { contacts } = props

  const { id } = useParams()

  const contact = getContact(id, contacts)

  return (
    <>
      <h2>{UIText.contactViewTitle}</h2>
      {
        contact ? (

          <>            
            <p>{contact.firstName} {contact.lastName}</p>
            <p>{contact.street} {contact.city}</p>
          </>

        ) : (
            <p>{UIText.contactViewNone}</p>
        )
      }
    </>
  )
}
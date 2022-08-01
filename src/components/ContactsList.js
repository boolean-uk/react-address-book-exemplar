import { Link } from "react-router-dom"

import { Paths, UIText } from "../utils"

export const ContactsList = (props) => {
  
  const { contacts } = props

  return (
    <>
      <header>
        <h2>{UIText.contactListTitle}</h2>
      </header>
      <ul className="contacts-list">
        {contacts.map((contact, index) => {

          const { id, firstName, lastName } = contact
          return (
            <li className="contact" key={index}>
              <p>
                {firstName} {lastName}
              </p>
              <Link to={`${Paths.view}/${id}`}>{UIText.contactListView}</Link>
              <Link to={`${Paths.edit}/${id}`}>{UIText.contactListEdit}</Link>
              <Link to={`${Paths.delete}/${id}`}>{UIText.contactListDelete}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}

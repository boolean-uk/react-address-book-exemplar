import { Link, useSearchParams } from "react-router-dom"

import FetchOptions from "../util/FetchOptions"
import Urls from "../util/Urls"
import Spinner from "./Spinner"

const FilterParam = "type"

function ContactsList(props) {
  const { contacts, setContacts, isLoading } = props

  const [searchParams, setSearchParams] = useSearchParams()

  const onFilterChecked = (e) => {
    let types = searchParams.getAll(FilterParam)
    if (e.target.checked) {
      types.push(e.target.value)
    } else {
      types = types.filter(type => type!=e.target.value)
    }
    setSearchParams({ type: types })
  }

  const hasFilterType = (type) => {
    return searchParams.getAll(FilterParam).includes(type)
  }

  const hasFilters = () => {
    return searchParams.getAll(FilterParam).length > 0
  }

  const deleteContact = (contact) => {
    fetch(Urls.contact(contact.id), FetchOptions.delete())
      .then(() => setContacts(contacts.filter(existing => existing!=contact)))
  }

  let filteredContacts
  if (!hasFilters()){
    filteredContacts = contacts
  } else {
    filteredContacts = contacts.filter((contact) => hasFilterType(contact.type))
  }

  return (
    <>
      <header>
        <h2>Contacts</h2>
      </header>
      { isLoading ? 
        <Spinner /> :
        <>
          <label className="filter">
            <input name="type" type="checkbox" value="personal" checked={hasFilterType("personal")} onChange={onFilterChecked} />
            <span>🍻</span> Personal
          </label>
          <label className="filter">
            <input name="type" type="checkbox" value="work" checked={hasFilterType("work")} onChange={onFilterChecked} />
            <span>💻</span> Work
          </label>
          <ul className="contacts-list">
            {filteredContacts.map((contact, index) => {
              const { firstName, lastName } = contact
              return (
                <li className="contact" key={index}>
                  <p>
                  {contact.type == 'work' ? <span>💻</span> : <span>🍻</span> }  {firstName} {lastName}
                  </p>
                  <p>
                    <Link to={`/contacts/${contact.id}`}>View</Link>{" "}
                    <Link to={`/contacts/${contact.id}/edit`}>Edit</Link>{" "}
                    <a href="#" onClick={() => deleteContact(contact)}>Delete</a>
                  </p>
                </li>
              )
            })}
          </ul>
      </> }
    </>
  )
}

export default ContactsList

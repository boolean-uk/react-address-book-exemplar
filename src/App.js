import { useEffect, useState } from "react"

import { Link, Route, Routes } from "react-router-dom"

import { 
  ContactsList,
  ContactsAdd,
  ContactsEdit,
  ContactsDelete,
  ContactsView
} from "./components"

import { 
  UIText, 
  fetchData, 
  apiURL, 
  Paths
} from "./utils"

export const App = () => {
  const [contacts, setContacts] = useState([])
  
  useEffect(() => {

    const fetchParams = {
      url: apiURL,
      cb: setContacts
    }
    fetchData(fetchParams)

  }, []); 

  //console.log('my contacts', contacts)

  return (
    <>
    <nav>
      <h2>{UIText.title}</h2>
      <ul>
        <li>
          <Link to={Paths.home}>{UIText.linkList}</Link>
        </li>
        <li>
          <Link to={Paths.add}>{UIText.linkAdd}</Link>
        </li>
      </ul>
    </nav>
    <main>
      <Routes>
        <Route path={Paths.home} element={<ContactsList contacts={contacts} />} />
        <Route
          path={Paths.add} 
          element={<ContactsAdd contacts={contacts} setContacts={setContacts} />}
        />
        <Route 
          path={Paths.editId} 
          element={<ContactsEdit contacts={contacts} setContacts={setContacts} />} 
        />
        <Route 
          path={Paths.deleteId} 
          element={<ContactsDelete contacts={contacts} setContacts={setContacts} />} 
        />
        <Route path={Paths.viewId} element={<ContactsView contacts={contacts} />} />
      </Routes>
    </main>
    </>
  )
}

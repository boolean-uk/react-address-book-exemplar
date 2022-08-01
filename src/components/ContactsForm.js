import { UIText } from '../utils'


export const ContactsForm = (props) => {

  const { settings: { 
    heading, 
    buttonText,
    value,
    handleChange,
    handleSubmit
  } } = props

  // console.log('props', props)

  return (
    <form className="form-stack contact-form" onSubmit={handleSubmit}>
      <h2>{heading}</h2>

      <label htmlFor="firstName">{UIText.contactFirst}</label>
      <input id="firstName" name="firstName" type="text" onChange={handleChange} value={value.firstName} required/>

      <label htmlFor="lastName">{UIText.contactLast}</label>
      <input id="lastName" name="lastName" type="text" onChange={handleChange} value={value.lastName} required/>

      <label htmlFor="street">{UIText.contactStreet}</label>
      <input id="street" name="street" type="text" onChange={handleChange} value={value.street} required/>

      <label htmlFor="city">{UIText.contactCity}</label>
      <input id="city" name="city" type="text" onChange={handleChange} value={value.city} required/>

      <div className="actions-section">
        <button className="button blue" type="submit">
          {buttonText}
        </button>
      </div>
    </form>
  )
}

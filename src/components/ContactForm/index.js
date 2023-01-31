function ContactForm ({type, handleSubmit, handleChange, contactData}) {

  return (
    <form className="form-stack contact-form" onSubmit={handleSubmit}>
      <h2>{type} Contact</h2>

      <select name="type" onChange={handleChange} value={contactData.type}>
        <option id="default" >Select...</option>
        <option id="personal" >personal</option>
        <option id="work" >work</option>
      </select>

      <label htmlFor="firstName">First Name</label>
      <input id="firstName" name="firstName" type="text" required onChange={handleChange} value={contactData.firstName}/>

      <label htmlFor="lastName">Last Name:</label>
      <input id="lastName" name="lastName" type="text" required onChange={handleChange} value={contactData.lastName}/>

      <label htmlFor="street">Street:</label>
      <input id="street" name="street" type="text" required onChange={handleChange} value={contactData.street}/>

      <label htmlFor="city">City:</label>
      <input id="city" name="city" type="text" required onChange={handleChange} value={contactData.city}/>

      <label htmlFor="email">email:</label>
      <input id="email" name="email" type="email" required onChange={handleChange} value={contactData.email}/>

      <label htmlFor="linkedin">Linkedin:</label>
      <input id="linkedin" name="linkedin" type="url" required onChange={handleChange} value={contactData.linkedin}/>

      <label htmlFor="twitter">Twitter:</label>
      <input id="twitter" name="twitter" type="url" required onChange={handleChange} value={contactData.twitter}/>

      <div className="actions-section">
        <button className="button blue" type="submit">
          {type}
        </button>
      </div>
    </form>
  )
}

export default ContactForm

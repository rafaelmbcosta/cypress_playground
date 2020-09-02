import React from 'react';
import './Form.css';

export default () => {
  return(
    <form>
      <label>First Name</label>
      <input type="text" id="formFirstName" />
      <label>Last Name:</label>
      <input type="text" id="formLastName" />
      <label>Description:</label>
      <textarea id="formDescription"></textarea>
      <input type="button" value="Submit" className="btn btnForm btn-default" />
    </form>
  )
}
import { useState } from "react";
import "./index.css";

const App = () => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const [contacts, setContacts] = useState([
    { name: "John Doe",         id: 1, email: "johndoe@gmail.com"         },
    { name: "Jane Smith",       id: 2, email: "janesmith@gmail.com"       },
    { name: "Michael Johnson",  id: 3, email: "michaeljohnson@gmail.com"  },
    { name: "Emily Davis",      id: 4, email: "emilydavis@gmail.com"      },
    { name: "David Brown",      id: 5, email: "davidbrown@gmail.com"      },
  ]);

const addContact = (e) => {
  e.preventDefault();
  const nextId = contacts.length > 0 ? Math.max(...contacts.map(contact => contact.id)) + 1 : 1;
  const trimmedNewName = newName.trim();
  const trimmedNewEmail = newEmail.trim();
  
  let sameName = false;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].name === trimmedNewName) {
      sameName = true;
      break;
    }
  }
  let sameEmail = false;
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].email === trimmedNewEmail) {
      sameEmail = true;
      break;
    }
  }

  if (sameName == true) {
    alert(trimmedNewName + " already exists")
  } else
  if (sameEmail == true) {
    alert(trimmedNewEmail + " already exists")
  } else

  if (trimmedNewName !== "" && trimmedNewEmail !== "") {
    setContacts([...contacts, {
      name: trimmedNewName,
      id: nextId,
      email: trimmedNewEmail,
    }]);
  } else {
    alert("you didn't enter all the info necesary, you baka")
  }
  setNewName("");
  setNewEmail("");

};

const clgContacts = (e) => {
  e.preventDefault();
  console.log(contacts);
};

return (
  <div className="contacts-app">
    <h2>Add a New Contact</h2>
    <form onSubmit={addContact}>
      <input
        type="text"
        placeholder="Enter contact name"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter contact email"
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <button type="submit">Add Contact</button>
    </form>

    <h2>Contact List</h2>
    {/* clg the contact objs */}
    <form onSubmit={clgContacts}>
      <button
        type="submit"
      >check</button>
    </form>
    <table className="contact-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      
      {/* individual entries */}
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id} className={contact.id % 2 === 0 ? "green-row" : "green-row-dark"}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

export default App;

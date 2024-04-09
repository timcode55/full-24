import { useEffect, useState } from "react";
import numberService from "./services/numbers.js";
import Notification from "./components/Notification.jsx";
import "./App.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [filterText, setFilterText] = useState("");
  const [notification, setNotification] = useState("");

  useEffect(() => {
    async function getData() {
      const data = await numberService.getAll();
      console.log(data, "RESPONSE");
      setPersons(data);
    }
    getData();
  }, []);

  function handleNameChange(e) {
    setNewName(e.target.value);
  }
  function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  function handleFilterChange(e) {
    setFilterText(event.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let isDuplicate = false;

    // Check if newName is already in the list
    persons.forEach((person) => {
      if (person.name === newName) {
        isDuplicate = true; // Set flag to true if newName is a duplicate

        return;
      }
    });

    // If newName is a duplicate, return without adding it to the list
    if (isDuplicate) {
      const answer = confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      );

      if (answer) {
        try {
          const existingPerson = persons.find(
            (person) => person.name === newName
          );
          const updatedPerson = numberService.update(existingPerson.id, {
            name: newName,
            number: number,
          });
          setPersons(
            persons.map((person) =>
              person.id === updatedPerson.id ? updatedPerson : person
            )
          );
        } catch (error) {
          console.log(error, "ERROR RELATED TO NO PERSON");
        }
      }
      setNewName("");
      setNumber("");
      return;
    }

    // If newName is not a duplicate, add it to the list
    const newPerson = await numberService.create({
      name: newName,
      number: number,
    });
    setPersons([...persons, newPerson]);
    setNotification(`Added '${newPerson.name}'`);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
    setNewName("");
    setNumber("");
  }

  function handleDelete(id) {
    const updatedPersons = persons.filter((person) => person.id !== id);
    setPersons(updatedPersons);
    numberService.deletePerson(id);
  }

  const filteredPersons = persons?.filter((person) => {
    return person.name.toLowerCase().includes(filterText.toLowerCase());
  });
  console.log(persons, "PERSONS");
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} />
      <p>
        filter shown with{" "}
        <input type="text" onChange={handleFilterChange} value={filterText} />
      </p>

      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <br />
        <div>
          number: <input value={number} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <p key={person.id}>
          {person.name}
          {person.number}
          <button onClick={() => handleDelete(person.id)}>Delete</button>
        </p>
      ))}
    </div>
  );
};

export default App;

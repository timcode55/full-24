import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [filterText, setFilterText] = useState("");

  function handleNameChange(e) {
    setNewName(e.target.value);
  }
  function handleNumberChange(e) {
    setNumber(e.target.value);
  }

  function handleFilterChange(e) {
    setFilterText(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isDuplicate = false;

    // Check if newName is already in the list
    persons.forEach((person) => {
      if (person.name === newName) {
        alert(`${newName} is already added to phonebook`);
        isDuplicate = true; // Set flag to true if newName is a duplicate
        return;
      }
    });

    // If newName is a duplicate, return without adding it to the list
    if (isDuplicate) {
      setNewName("");
      return;
    }

    // If newName is not a duplicate, add it to the list
    setPersons([...persons, { name: newName, number: number }]);
    setNewName("");
  }

  const filteredPersons = persons.filter((person) => {
    return person.name.toLowerCase().includes(filterText.toLowerCase());
  });

  return (
    <div>
      <h2>Phonebook</h2>
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
        </p>
      ))}
    </div>
  );
};

export default App;

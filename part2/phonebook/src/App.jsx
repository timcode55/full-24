import { useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  function handleInput(e) {
    setNewName(e.target.value);
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
    setPersons([...persons, { name: newName }]);
    setNewName("");
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  );
};

export default App;

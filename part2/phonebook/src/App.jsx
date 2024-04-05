import { useEffect, useState } from "react";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:3001/persons");
      const data = await response.json();
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

  const filteredPersons = persons?.filter((person) => {
    return person.name.toLowerCase().includes(filterText.toLowerCase());
  });
  console.log(persons, "PERSONS");
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

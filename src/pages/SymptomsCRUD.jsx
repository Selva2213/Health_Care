// SymptomsCRUD.jsx
import React, { useState } from "react";

function SymptomsCRUD() {
  const [symptoms, setSymptoms] = useState([]);
  const [newSymptom, setNewSymptom] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const addSymptom = () => {
    if (newSymptom.trim()) {
      setSymptoms([...symptoms, { id: Date.now(), name: newSymptom }]);
      setNewSymptom("");
    }
  };

  const deleteSymptom = (id) => {
    setSymptoms(symptoms.filter((s) => s.id !== id));
  };

  const startEditing = (id, name) => {
    setEditingId(id);
    setEditedValue(name);
  };

  const saveEdit = (id) => {
    setSymptoms(symptoms.map((s) => (s.id === id ? { ...s, name: editedValue } : s)));
    setEditingId(null);
    setEditedValue("");
  };

  return (
    <div>
      <h2>Manage Symptoms</h2>
      <input
        type="text"
        placeholder="New Symptom"
        value={newSymptom}
        onChange={(e) => setNewSymptom(e.target.value)}
      />
      <button onClick={addSymptom}>Add</button>

      <ul>
        {symptoms.map((s) => (
          <li key={s.id}>
            {editingId === s.id ? (
              <>
                <input
                  type="text"
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                />
                <button onClick={() => saveEdit(s.id)}>Save</button>
              </>
            ) : (
              <>
                {s.name}
                <button onClick={() => startEditing(s.id, s.name)}>Edit</button>
                <button onClick={() => deleteSymptom(s.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SymptomsCRUD;

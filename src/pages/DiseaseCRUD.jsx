// DiseasesCRUD.jsx
import React, { useState } from "react";

function DiseasesCRUD() {
  const [diseases, setDiseases] = useState([]);
  const [newDisease, setNewDisease] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedValue, setEditedValue] = useState("");

  const addDisease = () => {
    if (newDisease.trim()) {
      setDiseases([...diseases, { id: Date.now(), name: newDisease }]);
      setNewDisease("");
    }
  };

  const deleteDisease = (id) => {
    setDiseases(diseases.filter((d) => d.id !== id));
  };

  const startEditing = (id, name) => {
    setEditingId(id);
    setEditedValue(name);
  };

  const saveEdit = (id) => {
    setDiseases(diseases.map((d) => (d.id === id ? { ...d, name: editedValue } : d)));
    setEditingId(null);
    setEditedValue("");
  };

  return (
    <div>
      <h2>Manage Diseases</h2>
      <input
        type="text"
        placeholder="New Disease"
        value={newDisease}
        onChange={(e) => setNewDisease(e.target.value)}
      />
      <button onClick={addDisease}>Add</button>

      <ul>
        {diseases.map((d) => (
          <li key={d.id}>
            {editingId === d.id ? (
              <>
                <input
                  type="text"
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                />
                <button onClick={() => saveEdit(d.id)}>Save</button>
              </>
            ) : (
              <>
                {d.name}
                <button onClick={() => startEditing(d.id, d.name)}>Edit</button>
                <button onClick={() => deleteDisease(d.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DiseasesCRUD;

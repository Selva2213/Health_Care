// DoctorsCRUD.jsx
import React, { useState } from "react";

function DoctorsCRUD() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({
    name: "",
    specialization: "",
    address: "",
    consultingFee: "",
    image: ""
  });
  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const addDoctor = () => {
    if (form.name.trim()) {
      setDoctors([...doctors, { id: Date.now(), ...form }]);
      setForm({ name: "", specialization: "", address: "", consultingFee: "", image: "" });
    }
  };

  const deleteDoctor = (id) => {
    setDoctors(doctors.filter((d) => d.id !== id));
  };

  const startEditing = (doc) => {
    setEditingId(doc.id);
    setForm(doc);
  };

  const saveEdit = () => {
    setDoctors(doctors.map((d) => (d.id === editingId ? { ...form, id: editingId } : d)));
    setEditingId(null);
    setForm({ name: "", specialization: "", address: "", consultingFee: "", image: "" });
  };

  return (
    <div>
      <h2>Manage Doctors</h2>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <input name="specialization" placeholder="Specialization" value={form.specialization} onChange={handleChange} />
      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
      <input name="consultingFee" placeholder="Fee" value={form.consultingFee} onChange={handleChange} />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} />

      {editingId ? (
        <button onClick={saveEdit}>Save</button>
      ) : (
        <button onClick={addDoctor}>Add</button>
      )}

      <ul>
        {doctors.map((d) => (
          <li key={d.id}>
            <img src={d.image} alt={d.name} style={{ width: "50px", height: "50px" }} />
            <p><strong>{d.name}</strong> - {d.specialization}</p>
            <p>{d.address} | Fee: {d.consultingFee}</p>
            <button onClick={() => startEditing(d)}>Edit</button>
            <button onClick={() => deleteDoctor(d.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorsCRUD;

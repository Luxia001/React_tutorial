import { useState } from "react";
import "./AddForm.css";

export function AddForm(props) {
  const { students, setStudent } = props;
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");

  function saveStuden(e) {
    e.preventDefault();
    if (!name) {
      alert("please input name");
    } else {
      const newStudent = {
        id: [...students].length + 1,
        // Math.floor(Math.random() * 1000)
        name: name,
        gender: gender,
      };
      setStudent([...students, newStudent]);
      setName("");
    }
  }
  return (
    <section className="container">
      <form onSubmit={saveStuden}>
        <label for="">student name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          style={{ color: gender === "male" ? "#7EC3FB" : "#FB7EF2" }}
        >
          <option value="male" style={{ color: "#7EC3FB" }}>
            male
          </option>
          <option value="female" style={{ color: "#FB7EF2" }}>
            female
          </option>
        </select>
        <button type="submit" className="btn-save">
          save
        </button>
      </form>
    </section>
  );
}

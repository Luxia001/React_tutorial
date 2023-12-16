import { useState } from "react";
import { Header } from "./comoponents/Header";
import { StudentList } from "./comoponents/StudentList";
import { AddForm } from "./comoponents/AddForm";

function App() {
  const [students, setStudent] = useState([
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ]);
  function deleteStudent(id) {
    setStudent(students.filter((item) => item.id !== id));
  }
  return (
    <>
      <Header title="student data"></Header>
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <AddForm students={students} setStudent={setStudent} />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <StudentList students={students} deleteStudent={deleteStudent} />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

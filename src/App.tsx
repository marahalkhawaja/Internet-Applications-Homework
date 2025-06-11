import { useState } from "react";
import Table from "./components/Table";
import "./style/App.css";
function App() {
  const [selectedlevel, setSelectedLevel] = useState("All Levels");
  const allstudents = [
    { name: "Aiden Carter", level: 1, averageScore: 88 },
    { name: "Bella Thompson", level: 2, averageScore: 91 },
    { name: "Caleb Johnson", level: 3, averageScore: 84 },
    { name: "Daisy Nguyen", level: 3, averageScore: 93 },
    { name: "Ethan Wright", level: 1, averageScore: 76 },
    { name: "Fiona Lopez", level: 3, averageScore: 89 },
    { name: "Gavin Smith", level: 2, averageScore: 82 },
    { name: "Hannah Patel", level: 3, averageScore: 95 },
    { name: "Isaac Chen", level: 1, averageScore: 79 },
    { name: "Jasmine Rivera", level: 2, averageScore: 87 },
  ];
  const [students, setStudents] = useState(allstudents);
  let level: number = -1;
  function convertToNumber(stringLevel: string) {
    if (stringLevel === "All Levels") level = -1;
    else level = Number.parseInt(stringLevel[6]);
  }
  return (
    <>
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          border: "1px solid black",
          padding: "10px",
        }}
      >
        <h1>Student Overview</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "5px",
          }}
        >
          <span>Filter by level</span>
          <select
            value={selectedlevel}
            onChange={(event) => {
              setSelectedLevel(event.target.value);
              convertToNumber(event.target.value);
              setStudents(() =>
                allstudents.filter((st) => st.level === level || level === -1)
              );
            }}
          >
            <option>All Levels</option>
            <option>Level 1</option>
            <option>Level 2</option>
            <option>Level 3</option>
          </select>
        </div>
        <Table students={students} />
      </div>
    </>
  );
}

export default App;

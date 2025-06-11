import "../style/Table.css";
type stType = {
  name: string;
  level: number;
  averageScore: number;
};
type propsType = {
  students: stType[];
};
export default function Table({ students }: propsType) {
  const studentsList = students.map((st: stType) => {
    return (
      <tr>
        <td>{st.name}</td>
        <td>{st.level}</td>
        <td>{st.averageScore}</td>
      </tr>
    );
  });
  return (
    <>
      <table>
        <tr>
          <td>Name</td>
          <td>Level</td>
          <td>Average Score</td>
        </tr>
        {studentsList}
      </table>
    </>
  );
}

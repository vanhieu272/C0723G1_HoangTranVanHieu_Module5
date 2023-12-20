import "./StudentInfoStyle.css";

const studentInfoComponent = [
    {
        id: 1,
        name: 'Hieu',
        age: '22',
        address: 'Hue'
    },

    {
        id: 2,
        name: 'Thuan',
        age: '26',
        address: 'Quang Tri'
    },

    {
        id: 3,
        name: 'Huu',
        age: '24',
        address: 'Quang Ngai'
    }
]

function StudentInfo(){
    return(
        <table>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Name
                </th>
                <th>
                    Age
                </th>
                <th>
                    Address
                </th>
            </tr>
            {studentInfoComponent.map(student => (
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
                ))}
        </table>
    )
}

export default StudentInfo;
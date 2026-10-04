import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
function Profile() {
    const [applications, setApplications] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        function getApplications() {
            fetch("http://localhost:3000/applications")
                .then((response) => response.json(response))
                .then((data) => setApplications(data))
        }
        getApplications()

    }, [])

    const clicker = () => {
        navigate('/addApplication')
    }
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    return (
        <>
            <h1>Оставленные заявки</h1>
            <button onClick={clicker}>Создать заявку</button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {/* <th>#</th> */}
                        <th>тип помещения</th>
                        <th>дата начала </th>
                        <th>способ оплаты</th>
                        <th>отзыв</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        // applications.length === 0 ? 
                        // <h2 style={{ color: 'blue' }}>Заявок нет</h2> :
                    applications.map((el, index) => (
                        currentUser.id_user == el.id_user &&
                        (
                            <tr key={el.id_b}>
                                <td>{el.room}</td>
                                <td>{new Date(el.date_b).toLocaleString('ru-RU').slice(0, 10)}</td>
                                <td>{el.payment_method}</td>
                                <td><textarea></textarea></td>
                            </tr>
                        )
                    ))}
                </tbody>
            </Table>

        </>
    )
}
export default Profile;
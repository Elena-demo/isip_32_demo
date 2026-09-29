import { useState } from 'react';
import Table from 'react-bootstrap/Table';
function Profile() {
    const [request, setRequest] = useState([
        {
            id: 1,
            nameKurs: 'JavaScript',
            dateStart: '11.12.2000',
            paymentMethod: 'наличные',
            feedback: 'КРУТО'

        },
        {
            id: 2,
            nameKurs: 'JavaScript',
            dateStart: '11.12.2000',
            paymentMethod: 'наличные',
            feedback: 'КРУТО'

        },
        {
            id: 3,
            nameKurs: 'React',
            dateStart: '01.09.2022',
            paymentMethod: 'онлайн',
            feedback: 'Супер'
        }


    ])
    return (
        <>
            <h1>Просмотр заявок</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>наименование курса</th>
                        <th>дата начала обучения</th>
                        <th>способ оплаты</th>
                        <th>отзыв</th>
                    </tr>
                </thead>
                <tbody>

                    {request.map((el, index) => (
                        <tr>
                            <td>{el.id}</td>
                            <td>{el.nameKurs}</td>
                            <td>{el.dateStart}</td>
                            <td>{el.paymentMethod}</td>
                            <td>{el.feedback}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>
    )
}
export default Profile;
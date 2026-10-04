import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

export function Applications() {
       const [applications, setApplications] = useState([])

    useEffect(()=>{
         function getApplications() {
            fetch("http://localhost:3000/applications")
             .then((response)=>response.json(response))
             .then((data)=>setApplications(data))
         }
     getApplications()
    }, [])
    
    
    return (
        <>
            <h2> Кабинет админа</h2>
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
                       
                        
                    applications.map((el, index) => (
                        
                        <tr key={el.id_b}>
                            <td>{el.room}</td>
                            <td>{el.date_b}</td>
                            <td>{el.payment_method}</td>
                            <td>{el.paymentMethod}</td>
                            <td><textarea></textarea></td>
                        </tr>
                      
                    ))}
                </tbody>
            </Table>
        </>
    )

}
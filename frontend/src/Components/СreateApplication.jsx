


import { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function СreateApplication() {
    const navigate = useNavigate();

    const [loginError, setLoginError] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessange, setAlertMessange] = useState('')

    const [dataForm, setDataForm] = useState({
        id_user: '',
        room: '',
        date_b: '',
        payment_method: ''

    })

    
    useEffect(()=>{
        const currentUser = JSON.parse(localStorage.getItem('currentUser'))
        setDataForm({...dataForm, id_user: currentUser.id_user})
        
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3000/application", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dataForm),

        });

        const data = await response.json()
        if (response.ok) {
            alert(data.message)
            navigate('/home')

        } else {
            setShowAlert(true)
            setAlertMessange(data.message)
            setTimeout(() => setShowAlert(false), 2000)


        }
    }

    const handlerRoom = (value) => setDataForm({ ...dataForm, room: value })
    const handlerDate_b = (value) => setDataForm({ ...dataForm, date_b: value })
    const handlerPayment_method = (value) => setDataForm({ ...dataForm, payment_method: value })

    return (

        <Form className='m-3 p-3' onSubmit={handleSubmit}  >

            {showAlert &&
                <Alert variant="warning">
                    <Alert.Heading>{data.message}</Alert.Heading>
                </Alert>
            }
            <h1>Создание заявки</h1>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Помещение</Form.Label>
                    <Form.Control as="select" required defaultValue="" onChange={(e) => handlerRoom(e.target.value)}>
                        <option value="">выбрать</option>
                        <option value="аудитория">аудитория</option>
                        <option value="коворкинг">коворкинг</option>
                        <option value="кинозал">кинозал</option>
                    </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Дата бронирования</Form.Label>
                <Form.Control type="date" required value={dataForm.date_b}
                    onChange={(e) => { handlerDate_b(e.target.value) }}

                    placeholder="Дата бронирования" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" required controlId="formBasicPassword">
                <Form.Label>Способ оплаты</Form.Label>
                <Form.Control as="select" required onChange={(e) => handlerPayment_method(e.target.value)} defaultValue="">
                    <option value="">выбрать</option>
                    <option value={"очное посещение"}>очное посещение</option>
                    <option value={"перевод по системе СБП"}>перевод по системе СБП</option>
                </Form.Control>
            </Form.Group>

            <Button variant="primary mb-3" type="submit" >
                Создать заявку
            </Button>
        </Form>
    );
}

export default СreateApplication;



import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessange, setAlertMessange] = useState('')


  const [dataForm, setDataForm] = useState({
    login: '',
    password: '',
    fio: '',
    phone: '',
    email: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/reg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataForm),

    });

    const data = await response.json()
    if (!response.ok) {
      // alert(data.message)
      setAlertMessange(data.message)
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 2000)
    } else {
      alert(`Успешная регистрация`)
      
      navigate('/auth')

    }
  }

  const handlerLogin = (value) => setDataForm({ ...dataForm, login: value })
  const handlerPassword = (value) => setDataForm({ ...dataForm, password: value })
  const handlerFio = (value) => setDataForm({ ...dataForm, fio: value })
  const handlerEmail = (value) => setDataForm({ ...dataForm, email: value })
  const handlerTel = (value) => setDataForm({ ...dataForm, phone: value })
  return (

    <Form className='m-3 p-3' onSubmit={handleSubmit}  >

      {showAlert &&
        <Alert variant="warning">
          <Alert.Heading>Логин уже занят</Alert.Heading>
        </Alert>
      }

      <h1>Регистрация</h1>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Логин</Form.Label>
        <Form.Control type="text"
          minLength={6}
          title='латиница и цифры, не менее 6 символов'
          pattern='[a-zA-Z0-9]{6,}'
          required value={dataForm.login} onChange={(e) => { handlerLogin(e.target.value) }}
          placeholder="введите уникальный логин (латиница и цифры, не менее 6 символов)" />
        <Form.Control.Feedback>{loginError}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required value={dataForm.password}
          minLength={8}
          onChange={(e) => { handlerPassword(e.target.value) }}
          title='минимум 8 символов'
          placeholder="Пароль (минимум 8 символов)" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" required controlId="formBasicPassword">
        <Form.Label>ФИО</Form.Label>
        <Form.Control type="text" value={dataForm.fio}
          title='символы кириллицы и пробелы'
          pattern='[а-яА-ЯёЁ\s]+' required
          onChange={(e) => { handlerFio(e.target.value) }} placeholder="ФИО (символы кириллицы и пробелы)" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={dataForm.email} title='формат: электронной почты' required onChange={(e) => { handlerEmail(e.target.value) }} placeholder="адрес электронной почты (формат: электронной почты)" />
        <Form.Text type="invalid" className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" required controlId="formBasicPassword">
        <Form.Label>Телефон</Form.Label>
        <Form.Control type="text" value={dataForm.tel}
          pattern='8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}'
          title="Формат: 8(XXX)XXX-XX-XX"
          onChange={(e) => { handlerTel(e.target.value) }} required placeholder="Телефон (фоат: 8(XXX)XXX-XX-XX)" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit" >
        Создать пользователя
      </Button>
    </Form>
  );
}

export default Registration;
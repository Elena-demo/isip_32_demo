
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

function Registration({users, setUsers}) {
  const navigate = useNavigate();

  const [loginError, setLoginError] = useState('')
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessange, setAlertMessange] = useState('')

  
  // const [users, setUsers] = useState(
  //   [
  //     { login: 'qqqwwwe', password: '123' },
  //     { login: 'www', password: '111' }]
  // )


  const [dataForm, setDataForm] = useState({
    login: '',
    password: '',
    fio: '',
    email: '',
    tel: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, dataForm])
    setDataForm({
      login: '',
      password: '',
      fio: '',
      email: '',
      tel: ''
    });
    navigate('/auth')
  }

  const validateLogin = (value) => {
    const foundUser = users.some((user) => user.login === value);
    if (!foundUser) {
      setDataForm({ ...dataForm, login: value })
      setLoginError('')
    } else {
      // setLoginError('Логин уже занят')
      // alert('Логин уже занят')
      setAlertMessange('Логин уже занят')
      setShowAlert(true)
      setTimeout(() => setShowAlert(false), 2000)
    }
  }

  const validatePassword = (value) => setDataForm({ ...dataForm, password: value })
  const validateFio = (value) => setDataForm({ ...dataForm, fio: value })
  const validateEmail = (value) => setDataForm({ ...dataForm, email: value })
  const validateTel = (value) => setDataForm({ ...dataForm, tel: value })
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
        <Form.Control type="text" minLength={5} title='латиница и цифры, не менее 6 символов' pattern='[a-zA-Z0-9]{6,}' required value={dataForm.login} onChange={(e) => { validateLogin(e.target.value) }} placeholder="введите уникальный логин (латиница и цифры, не менее 6 символов)" />
        <Form.Control.Feedback>{loginError}</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required value={dataForm.password} minLength={8}
          onChange={(e) => { validatePassword(e.target.value) }}
          title='минимум 8 символов'
          placeholder="Пароль (минимум 8 символов)" />
        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" required controlId="formBasicPassword">
        <Form.Label>ФИО</Form.Label>
        <Form.Control type="text" value={dataForm.fio}
          title='символы кириллицы и пробелы'
          pattern='[а-яА-ЯёЁ\s]+' required
          onChange={(e) => { validateFio(e.target.value) }} placeholder="ФИО (символы кириллицы и пробелы)" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={dataForm.email} title='формат: электронной почты' required onChange={(e) => { validateEmail(e.target.value) }} placeholder="адрес электронной почты (формат: электронной почты)" />
        <Form.Text type="invalid" className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" required controlId="formBasicPassword">
        <Form.Label>Телефон</Form.Label>
        <Form.Control type="text" value={dataForm.tel} pattern='8\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}'
          title="Формат: 8(XXX)XXX-XX-XX"
          onChange={(e) => { validateTel(e.target.value) }} required placeholder="Телефон (фоат: 8(XXX)XXX-XX-XX)" />
      </Form.Group>
      <Button variant="primary mb-3" type="submit" >
        Создать пользователя
      </Button>
    </Form>
  );
}

export default Registration;
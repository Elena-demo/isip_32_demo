import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Auth({ users, setUsers }) {
  console.log(users);

  const navigate = useNavigate();
  const clicker = () => {
    navigate('/')
  }

  // const[users, setUsers] = useState(
  //   [
  //   {login: 'qqqwwwe', password: '123'}, 
  //   {login: 'www', password: '111'}]
  //   )

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handlerLogin = (value) => setLogin(value);
  const handlerPassword = (value) => setPassword(value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('')
    if (!login || !password) {
      setError('Все поля обязательны для заполнения');
      return;
    }
    const foundUser = users.some((user) => user.login === login && user.password === password);
    console.log(foundUser);

    if (foundUser) {
      alert('Вы вошли в систему')
      setLogin('');
      setPassword('');
      navigate('/home')
    } else {
      setError('Неверный логин или пароль')
    }

  }

  return (

    <Form className='m-3 p-3'>
      <h1>Авторизация</h1>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Логин</Form.Label>
        <Form.Control type="text" value={login} placeholder="Логин"
          onChange={(e) => handlerLogin(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Пароль" value={password} onChange={(e) => handlerPassword(e.target.value)} />
        <Form.Text className="text-danger fw-bold">
          {error}
        </Form.Text>
      </Form.Group>
      <div className="d-flex flex-column">
        <Button variant="primary mb-3" type="submit" onClick={handleSubmit}>
          Войти в личный кабинет
        </Button>
        <Button variant="primary" type="submit" onClick={clicker}>
          Ещё не зарегистрированы?
        </Button>

        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home">Ещё не зарегистрированы? </Nav.Link>
        </Nav>





      </div>
    </Form>
  );
}

export default Auth;
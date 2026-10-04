import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Auth() {

  const navigate = useNavigate();
  const clicker = () => {
    navigate('/')
  }

  //хранение в State более простым способом (в отличие от хранения в Регистрации)
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handlerLogin = (value) => setLogin(value);
  const handlerPassword = (value) => setPassword(value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    //в отличие от  Регистрации проверка пустых инпутов на Js
    if (!login || !password) {
      setError('Все поля обязательны для заполнения');
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      const result = await response.json()

      if (result.user === false) {
        //другой способ вывода ошибок (на форме)
        setError(result.message )
        return
      } 
        
        localStorage.setItem("currentUser", JSON.stringify(result.user))
        alert(result.message)
        navigate("/home")
    
    } catch (error) {
      console.error(error);
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
          {/* другой способ вывода ошибок */}
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
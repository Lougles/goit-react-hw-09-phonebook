import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};
const initialState = {
  name: '',
  email: '',
  password: '',
}

const RegisterView = () => {
  
  const [user, setUser] = useState(initialState);
  const dispatch = useDispatch();


  const handleChange = ({ target: { name, value } }) => {

    setUser((prevState) => ({...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register(user));
    setUser(initialState);
  };

    return (
      <div>
        <h1>Страница регистрации</h1>
        <form
          onSubmit={handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Имя
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
          </label>

          <label className="SearchForm-label" style={styles.label}>
            Пароль
            <input
              className="SearchForm"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
          </label>

          <button className="Button" type="submit">Зарегать</button>
        </form>
      </div>
    );
}

export default RegisterView;
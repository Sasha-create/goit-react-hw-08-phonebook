import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';
import s from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to={routes.register}
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Регистрация
    </NavLink>
    <NavLink
      to={routes.login}
      exact
      className={s.link}
      activeClassName={s.activeLink}
    >
      Логин
    </NavLink>
  </div>
);

export default AuthNav;

// export default function AuthNav() {
//   return (
//     <div>
//       <NavLink
//         to="/register"
//         exact
//         style={styles.link}
//         activeStyle={styles.activeLink}
//       >
//         Регистрация
//       </NavLink>
//       <NavLink
//         to="/login"
//         exact
//         style={styles.link}
//         activeStyle={styles.activeLink}
//       >
//         Логин
//       </NavLink>
//     </div>
//   );
// }

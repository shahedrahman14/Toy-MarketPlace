/* eslint-disable react/prop-types */

import { NavLink } from 'react-router-dom';

const ActiveLink = ({to,children}) => {
    return (
        <div>
        <NavLink
          to={to}
          className={({ isActive}) =>isActive ? "active text-blue-500 underline": "" }
        >
          {children}
        </NavLink>
</div>
    );
};

export default ActiveLink;
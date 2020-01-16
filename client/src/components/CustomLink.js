import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';

const CustomLink = ({ label, to, activeOnlyWhenExact }) => {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <Link className={`link_router ${match ? "active" : ""}`} to={to}>
      {label}
    </Link>
  );
};

export default CustomLink;
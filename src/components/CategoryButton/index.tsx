import { useState } from "react";
import { Link } from "react-router-dom";

const CategoryButton = ({ path, option, children }) => {
  const baseLink = `${path}?option=${option}`;

  return <Link to={baseLink}>{children}</Link>;
};

export default CategoryButton;

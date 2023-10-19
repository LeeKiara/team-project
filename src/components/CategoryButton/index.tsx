import { Link } from "react-router-dom";

const CategoryButton = ({ path, option, children }) => {
  const baseLink = `${path === "books" ? "" : "/books"}/${path}?option=${option}`;
  return <Link to={baseLink}>{children}</Link>;
};

export default CategoryButton;

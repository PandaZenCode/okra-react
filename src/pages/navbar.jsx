import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routeContext } from "../App";
import { Menu } from "antd";

const Navbar = () => {
  const route = useContext(routeContext);
  const navigate = useNavigate();

  const [current, setCurrent] = useState("home");
  const onClick = (e) => {
    setCurrent(e.key);
    navigate(`/${e.key === "home" ? "" : e.key}`);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="inline"
      items={route.map((items) => {
        return {
          label: items.label,
          key: items.key,
        };
      })}
    />
    // <nav>
    //   <ul>
    //     {route.map(({ path, name }) => (
    //       <li key={path}>
    //         <Link to={path}>{name}</Link>
    //       </li>
    //     ))}
    //   </ul>
    // </nav>
  );
};

export default Navbar;

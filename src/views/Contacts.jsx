import { useEffect, useState } from "react";
import Contact from "../components/Contact/Contact";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Contacts.css";

function Contacts() {
  let [data, setData] = useState([]);
  // let data = [];
  // useEffect, useState
  useEffect(() => {
    fetch("/contacts.json")
      .then((res) => res.json())
      .then((info) => {
        setData(info);
        // data = info;
      });
  }, []);

  return (
    <div>
      <h1>Lista de contactos</h1>
      {data.map((item) => (
        <Link to="/chat">
          <Contact img={item.img} name={item.name} icon={item.messages[0]} />
        </Link>
      ))}
    </div>
  );
}

export default Contacts;

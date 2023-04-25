import Contact from "../components/Contact/Contact";
import "./Chat.css";

function Chat() {
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
    <div className="chat">
      <div>
        {data.map((item) => (
          <Contact img={item.img} name={item.name} icon={item.messages[0]} />
        ))}
      </div>
    </div>
  );
}

export default Chat;

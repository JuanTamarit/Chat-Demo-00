import "./Contact.css";

function Contact(props) {
  return (
    <div className="contact">
      <div>
        <img className="contact__img" src={props.img} alt="contacto" />
      </div>
      <div>
        <strong>{props.name}</strong>
        <p>{props.icon}</p>
      </div>{" "}
    </div>
  );
}

export default Contact;

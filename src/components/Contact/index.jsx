import "./style.css";

const Apropos = () => {
  return (
    <div className="contact">
      <h1>Veuillez me contacter </h1>
      <h4>Téléphone:</h4>
      <p>06-64-01-40-96</p>

      <h4>Email:</h4>
      <p>adama.bilaltraore@gmail.com</p>

      <h4>Addresse:</h4>
      <p>27 Rue Claude Debussy, 59650 , Villeneuve d'Ascq</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10125.463369288322!2d3.1325500697753905!3d50.62032029999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d6341576f8b9%3A0x8e4a6b662313e9dd!2s27%20Rue%20Claude%20Debussy!5e0!3m2!1sfr!2sfr!4v1650241452863!5m2!1sfr!2sfr"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
};

export default Apropos;

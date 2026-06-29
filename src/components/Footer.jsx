import React from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
      
        <div className="footer-section">
          <h2 className="footer-logo">Enaa's Store</h2>
          <p>
            Votre destination pour les meilleurs produits électroniques :
            ordinateurs, smartphones, accessoires et bien plus encore.
          </p>
        </div>

     
        <div className="footer-section">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/produits">Produits</a></li>
            <li><a href="/categories">Catégories</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

      
      

       
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Béni Mellal, Maroc</p>
          <p>📧 contact@enaastore.ma</p>
          <p>📞 +212 6 12 34 56 78</p>

          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Enaa's Store réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
import {
  FaPinterestSquare,
  FaInstagram,
  FaTwitter,
  FaFacebookSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-bg-container">
    <div className="footer-icon-container">
      <img
        className="footer-icon"
        src="https://res.cloudinary.com/tskhayagreevac/image/upload/v1635043150/Vector_yyxamo.png"
        alt="website-footer-logo"
      />
      <h1 className="footer-heading">Tasty Kitchens</h1>
    </div>
    <p className="footer-para">
      The only thing we are serious about is food. Contact us on
    </p>
    <div className="social-icons-container">
      <FaPinterestSquare
        className="social-icon-style"
        testid="pintrest-social-icon"
      />
      <FaInstagram
        className="social-icon-style"
        testid="instagram-social-icon"
      />
      <FaTwitter className="social-icon-style" testid="twitter-social-icon" />
      <FaFacebookSquare
        className="social-icon-style"
        testid="facebook-social-icon"
      />
    </div>
  </div>
)

export default Footer

import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; all rights reserved by {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;

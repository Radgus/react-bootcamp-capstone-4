import Header from "./Header";
import Footer from "./Footer";
import PropTypes from 'prop-types';

const Layout = ({ children }) => (
  <>
    <Header/>
    { children }
    <Footer/>
  </>
);

Layout.propTypes = {
  children: PropTypes.element,
}

export default Layout;

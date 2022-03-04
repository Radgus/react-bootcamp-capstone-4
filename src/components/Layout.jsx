import Header from "./Header";


const Layout = ({ children }) => (
  <>
    <Header/>
    { children }
    <h1>Footer</h1>
  </>
);

export default Layout;

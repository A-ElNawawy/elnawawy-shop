import Container from "../../components/Container/Container";

import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <nav className='upNav'>upNav</nav>

      <nav className='sideNav'>sideNav</nav>
      <Container>
        <section className={styles.content}>{children}</section>
      </Container>
    </div>
  );
};

export default Layout;

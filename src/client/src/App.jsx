import logo from "./assets/logos/tc-logo-min.png";
import navLogo from "./assets/logos/tc-logo-long-wl.png";
import "./styles/index.css";

function App() {
  return (
    <div id="home">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={navLogo} />
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/">
              Docs
            </a>
            <a className="navbar-item" href="/members">
              Members
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Lists</a>
              <div className="navbar-dropdown">
                <a className="navbar-item"> About </a>
                <a className="navbar-item"> Jobs </a>
                <a className="navbar-item"> Contact </a>
                <hr className="navbar-divider" />
                <a className="navbar-item"> Report an issue </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main
        className="
          container
          d-flex
          justify-content-center
          align-items-center
          flex-column
        "
      >
        <h1 className="title is-1 has-text-white">
          To <s className="has-text-danger">See</s>
          <em className="has-text-success">Change</em> the World
        </h1>
        <div
          className="
            appear
            isometric-card
            d-flex
            justify-content-center
            align-items-center
          "
        >
          <img src={logo} className="rotate-half" alt="" />
        </div>
      </main>
    </div>
  );
}

export default App;

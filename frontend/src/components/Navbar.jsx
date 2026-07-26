function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        height: "80px",
        backgroundColor: "#0f0f0f",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 80px",
        boxSizing: "border-box",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <style>
        {`
    .nav-link {
      position: relative;
      text-decoration: none;
      color: #fff;
      opacity: 0.75;
      transition: opacity 0.3s ease;
    }

    .nav-link:hover {
      opacity: 1;
    }

    .nav-link::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: -6px;
      width: 0;
      height: 1px;
      background: #fff;
      transform: translateX(-50%);
      transition: width 0.3s ease;
    }

    .nav-link:hover::after {
      width: 100%;
    }

    .hire-btn {
      transition:
        transform 0.3s ease,
        background 0.3s ease,
        box-shadow 0.3s ease;
    }

    .hire-btn:hover {
      transform: translateY(-4px);
      background: #dedede !important;
      box-shadow: 0 10px 30px rgba(255,255,255,0.1);
    }

    .hire-btn:active {
      transform: translateY(-1px) scale(0.98);
    }
  `}
      </style>
      {/* Logo */}
      <h2
        style={{
          color: "white",
          margin: 0,
          cursor: "pointer",
        }}
      >
        Editor Portfolio
      </h2>

      {/* Navigation */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "35px",
        }}
      >
        <a href="#hero" className="nav-link" style={linkStyle}>Home</a>
        <a href="#projects" className="nav-link" style={linkStyle}>Projects</a>
        <a href="#services" className="nav-link" style={linkStyle}>Services</a>
        <a href="#about" className="nav-link" style={linkStyle}>About</a>
        <a href="#contact" className="nav-link" style={linkStyle}>Contact</a>

        <button
          className="hire-btn"
          style={{
            padding: "10px 22px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#ffffff",
            color: "#111",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontWeight: "500",
};

export default Navbar;
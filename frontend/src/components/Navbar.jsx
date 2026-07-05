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
        <a href="#hero" style={linkStyle}>Home</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#services" style={linkStyle}>Services</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#contact" style={linkStyle}>Contact</a>

        <button
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
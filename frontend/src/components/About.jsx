function About() {
  return (
    <section
      id="about"
      style={{
        minHeight: "80vh",
        background: "#080808",
        color: "#fff",
        padding: "120px 8%",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Button animation */}
      <style>
        {`
          .about-btn {
            transition:
              transform 0.3s ease,
              background 0.3s ease,
              box-shadow 0.3s ease;
          }

          .about-btn:hover {
            transform: translateY(-4px);
            background: #dedede !important;
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
          }

          .about-btn:active {
            transform: translateY(-1px) scale(0.98);
          }

          .about-btn-text {
            display: inline-block;
            // transition: transform 0.3s ease;
          }

          .about-btn:hover .about-btn-text {
            transform: translateX(3px);
          }
        `}
      </style>

      <div
        style={{
          maxWidth: "1400px",
          width: "100%",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: "100px",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}
        <div>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              opacity: 0.5,
              marginBottom: "16px",
            }}
          >
            About Me
          </p>

          <h2
            style={{
              fontSize: "64px",
              lineHeight: "1.05",
              margin: 0,
            }}
          >
            Stories shaped
            <br />
            frame by frame.
          </h2>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              opacity: 0.85,
              marginTop: 0,
            }}
          >
            I'm a video editor focused on turning raw footage into engaging,
            polished stories. From cinematic edits to fast-paced short-form
            content, every cut is made with rhythm, emotion, and attention to
            detail.
          </p>

          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              opacity: 0.5,
              marginTop: "30px",
            }}
          >
            I work across video editing, color grading, short-form content,
            and motion graphics, adapting each project to its own visual
            language and energy.
          </p>

          <a
            href="#contact"
            className="about-btn"
            style={{
              display: "inline-block",
              marginTop: "35px",
              padding: "16px 30px",
              background: "#fff",
              color: "#000",
              textDecoration: "none",
              fontWeight: "600",
              borderRadius: "6px",
            }}
          >
            <span className="about-btn-text">Let's Work Together</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
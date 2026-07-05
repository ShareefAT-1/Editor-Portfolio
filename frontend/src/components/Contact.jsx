function Contact() {
  return (
    <section
      id="contact"
      style={{
        minHeight: "80vh",
        background: "#000",
        color: "#fff",
        padding: "120px 8%",
        display: "flex",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "14px",
            letterSpacing: "4px",
            textTransform: "uppercase",
            opacity: 0.5,
            marginBottom: "20px",
          }}
        >
          Get In Touch
        </p>

        <h2
          style={{
            fontSize: "clamp(56px, 8vw, 120px)",
            lineHeight: "0.95",
            margin: "0 0 50px",
            maxWidth: "1100px",
          }}
        >
          Have a story?
          <br />
          Let's make it move.
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              maxWidth: "520px",
              fontSize: "19px",
              lineHeight: "1.7",
              opacity: 0.6,
              margin: 0,
            }}
          >
            Have a project in mind or footage waiting to become something
            memorable? Send a message and let's create something worth
            watching.
          </p>

          <a
            href="mailto:editor@example.com?subject=Video Editing Project&body=Hi, I would like to discuss a video editing project." style={{
              display: "inline-block",
              padding: "18px 34px",
              background: "#fff",
              color: "#000",
              textDecoration: "none",
              fontWeight: "600",
              borderRadius: "6px",
              fontSize: "17px",
            }}
          >
            Start a Project →
          </a>
        </div>

        <div
          style={{
            marginTop: "100px",
            paddingTop: "30px",
            borderTop: "1px solid #222",
            display: "flex",
            justifyContent: "space-between",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              opacity: 0.4,
            }}
          >
            Available for freelance projects
          </span>

          <div
            style={{
              display: "flex",
              gap: "30px",
            }}
          >
            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                opacity: 0.7,
              }}
            >
              Instagram
            </a>

            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                opacity: 0.7,
              }}
            >
              YouTube
            </a>

            <a
              href="#"
              style={{
                color: "#fff",
                textDecoration: "none",
                opacity: 0.7,
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
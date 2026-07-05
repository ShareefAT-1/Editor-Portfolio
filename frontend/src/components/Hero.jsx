function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "120px 8% 60px",
        boxSizing: "border-box",
      }}
    >
      {/* Background text */}
      <div
        style={{
          position: "absolute",
          right: "-40px",
          top: "50%",
          transform: "translateY(-50%) rotate(90deg)",
          fontSize: "13px",
          letterSpacing: "8px",
          textTransform: "uppercase",
          opacity: 0.18,
          whiteSpace: "nowrap",
        }}
      >
        EDIT · STORY · MOTION · RHYTHM
      </div>

      {/* Decorative number */}
      <span
        style={{
          position: "absolute",
          top: "170px",
          right: "10%",
          fontSize: "14px",
          letterSpacing: "3px",
          opacity: 0.35,
        }}
      >
        01 / PORTFOLIO
      </span>

      <div
        style={{
          width: "100%",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "30px",
          }}
        >
          <span
            style={{
              width: "50px",
              height: "1px",
              background: "#fff",
              opacity: 0.5,
            }}
          />

          <p
            style={{
              margin: 0,
              fontSize: "13px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              opacity: 0.55,
            }}
          >
            Video Editor · Visual Storyteller
          </p>
        </div>

        {/* Main heading */}
        <h1
          style={{
            fontSize: "clamp(70px, 10vw, 150px)",
            lineHeight: "0.88",
            letterSpacing: "-5px",
            margin: 0,
            maxWidth: "1200px",
            fontWeight: "700",
          }}
        >
          Stories in
          <br />

          <span
            style={{
              fontStyle: "italic",
              fontWeight: "400",
              opacity: 0.65,
            }}
          >
            motion.
          </span>
        </h1>

        {/* Bottom content row */}
        <div
          style={{
            marginTop: "60px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "50px",
            flexWrap: "wrap",
          }}
        >
          <p
            style={{
              maxWidth: "540px",
              fontSize: "19px",
              lineHeight: "1.7",
              color: "#999",
              margin: 0,
            }}
          >
            Transforming raw footage into cinematic stories, sharp edits,
            and visuals built to hold attention beyond the first frame.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#projects"
              style={{
                padding: "17px 32px",
                background: "#fff",
                color: "#000",
                textDecoration: "none",
                fontWeight: "600",
                borderRadius: "4px",
              }}
            >
              View Work ↓
            </a>

            <a
              href="#contact"
              style={{
                padding: "16px 32px",
                background: "transparent",
                color: "#fff",
                textDecoration: "none",
                fontWeight: "600",
                border: "1px solid #444",
                borderRadius: "4px",
              }}
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll marker */}
      <div
        style={{
          position: "absolute",
          bottom: "25px",
          left: "8%",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          opacity: 0.35,
          fontSize: "11px",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        <span>Scroll to explore</span>

        <span
          style={{
            display: "inline-block",
            width: "50px",
            height: "1px",
            background: "#fff",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
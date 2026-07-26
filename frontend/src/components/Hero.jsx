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
      {/* Button animations */}
      <style>
        {`
          .hero-btn {
            transition:
              transform 0.3s ease,
              background 0.3s ease,
              color 0.3s ease,
              border-color 0.3s ease,
              box-shadow 0.3s ease;
          }

          .hero-btn:hover {
            transform: translateY(-4px);
          }

          .hero-btn:active {
            transform: translateY(-1px) scale(0.98);
          }

          .hero-primary:hover {
            background: #dedede !important;
            box-shadow: 0 10px 30px rgba(255, 255, 255, 0.1);
          }

          .hero-secondary:hover {
            background: #fff !important;
            color: #000 !important;
            border-color: #fff !important;
          }

          .hero-arrow {
            display: inline-block;
            transition: transform 0.3s ease;
          }

          .hero-primary:hover .hero-arrow {
            transform: translateY(4px);
          }
        `}
      </style>

      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.45)",
          zIndex: 1,
        }}
      />

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
          position: "relative",
          zIndex: 2,
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
              className="hero-btn hero-primary"
              style={{
                padding: "17px 32px",
                background: "#fff",
                color: "#000",
                textDecoration: "none",
                fontWeight: "600",
                borderRadius: "4px",
              }}
            >
              View Work <span className="hero-arrow">↓</span>
            </a>

            <a
              href="#contact"
              className="hero-btn hero-secondary"
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
﻿import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../services/api";

function ProjectDetails() {
  const { id } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isBackHovered, setIsBackHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await getProjectById(id);
        setProject(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load project.");
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [id]);

  if (loading) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#050505",
          color: "#fff",
          fontSize: "22px",
          letterSpacing: "4px",
          textTransform: "uppercase",
        }}
      >
        Loading Project...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#050505",
          color: "#fff",
          fontSize: "22px",
        }}
      >
        {error}
      </div>
    );
  }

  return (
    <div
      style={{
        background:
          "radial-gradient(circle at top, #1b1b1b 0%, #090909 40%, #050505 100%)",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      {/* ================= HERO ================= */}

      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "0 8%",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1500px",
            margin: "0 auto",
          }}
        >
          <Link
            to="/"
            onMouseEnter={() => setIsBackHovered(true)}
            onMouseLeave={() => setIsBackHovered(false)}
            style={{
              color: isBackHovered ? "#ffffff" : "#d6d6d6",
              textDecoration: "none",
              letterSpacing: "4px",
              textTransform: "uppercase",
              fontSize: "13px",
              transition: "all .3s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                transform: isBackHovered ? "translateX(-4px)" : "translateX(0)",
                transition: "transform .3s ease",
              }}
            >
              ←
            </span>

            Back To Portfolio
          </Link>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.25fr 1fr",
              gap: "70px",
              alignItems: "center",
              marginTop: "60px",
            }}
          >
            {/* VIDEO */}

            <div
              style={{
                borderRadius: "28px",
                overflow: "hidden",
                background: "#111",
                boxShadow: "0 40px 100px rgba(0,0,0,.45)",
              }}
            >
              <video
                src={project.videoUrl}
                controls
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  display: "block",
                  aspectRatio: "16/9",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* TEXT */}

            <div>
              <p
                style={{
                  color: "#d6b06a",
                  letterSpacing: "6px",
                  textTransform: "uppercase",
                  fontSize: "13px",
                  marginBottom: "20px",
                }}
              >
                Featured Project
              </p>

              <h1
                style={{
                  fontSize: "clamp(56px,6vw,96px)",
                  lineHeight: ".9",
                  margin: 0,
                  textTransform: "uppercase",
                }}
              >
                {project.title}
              </h1>

              <p
                style={{
                  marginTop: "28px",
                  color: "#b0b0b0",
                  lineHeight: "1.9",
                  fontSize: "20px",
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "45px",
                  marginTop: "45px",
                  flexWrap: "wrap",
                }}
              >
                <Info title="Category" value="Automotive Edit" />
                <Info title="Software" value="Premiere Pro" />
                <Info title="Year" value="2026" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DIVIDER ================= */}

      <section
        style={{
          padding: "0 8%",
        }}
      >
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            borderTop: "1px solid rgba(255,255,255,.08)",
          }}
        />
      </section>

      {/* ================= OVERVIEW ================= */}

      <section
        style={{
          padding: "120px 8%",
        }}
      >
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "120px",
            alignItems: "start",
          }}
        >
          {/* LEFT */}

          <div>
            <p
              style={{
                color: "#d6b06a",
                letterSpacing: "6px",
                textTransform: "uppercase",
                fontSize: "13px",
                marginBottom: "25px",
              }}
            >
              Project Overview
            </p>

            <h2
              style={{
                fontSize: "clamp(36px,4vw,54px)",
                marginBottom: "40px",
                lineHeight: "1.2",
              }}
            >
              Every frame was carefully crafted to create an emotional visual
              experience.
            </h2>

            <p
              style={{
                color: "#bdbdbd",
                lineHeight: "2",
                fontSize: "18px",
                maxWidth: "720px",
              }}
            >
              {project.description}
            </p>
          </div>

          {/* RIGHT */}

          <div
            style={{
              borderLeft: "1px solid rgba(255,255,255,.08)",
              paddingLeft: "45px",
            }}
          >
            <p
              style={{
                color: "#777",
                letterSpacing: "5px",
                fontSize: "12px",
                marginBottom: "50px",
                textTransform: "uppercase",
              }}
            >
              Project Details
            </p>

            <Info title="Category" value="Automotive Edit" />
            <Info title="Client" value="Personal Project" />
            <Info title="Year" value="2026" />
            <Info title="Software" value="Premiere Pro" />
          </div>
        </div>
      </section>

      nv

      {/* ================= QUOTE ================= */}

      <section
        style={{
          padding: "0 8% 140px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "42px",
              lineHeight: "1.6",
              color: "#ececec",
              fontWeight: "300",
            }}
          >
            “Editing isn't about adding effects.
            <br />
            It's about removing distractions.”
          </p>
        </div>
      </section>

      {/* ================= NEXT PROJECT ================= */}

      <section
        style={{
          padding: "120px 8%",
          borderTop: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1500px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "30px",
          }}
        >
          <div>
            <p
              style={{
                color: "#777",
                letterSpacing: "5px",
                textTransform: "uppercase",
                fontSize: "12px",
                marginBottom: "20px",
              }}
            >
              Continue Exploring
            </p>

            <h2
              style={{
                fontSize: "clamp(42px,5vw,70px)",
                margin: 0,
              }}
            >
              Next Project
            </h2>
          </div>

          const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);

          <Link
            to="/"
            onMouseEnter={() => setIsPortfolioHovered(true)}
            onMouseLeave={() => setIsPortfolioHovered(false)}
            style={{
              textDecoration: "none",
              color: isPortfolioHovered ? "#e5c07b" : "#d6b06a",
              border: isPortfolioHovered
                ? "1px solid rgba(229,192,123,.85)"
                : "1px solid rgba(214,176,106,.35)",
              padding: "18px 34px",
              borderRadius: "100px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              transition: "all .35s ease",
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              boxShadow: isPortfolioHovered
                ? "0 0 28px rgba(214,176,106,.15)"
                : "none",
            }}
          >
            Back To Portfolio

            <span
              style={{
                transform: isPortfolioHovered
                  ? "translateX(5px)"
                  : "translateX(0)",
                transition: "transform .35s ease",
              }}
            >
              →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}

function Info({ title, value }) {
  return (
    <div
      style={{
        marginBottom: "45px",
      }}
    >
      <p
        style={{
          color: "#666",
          fontSize: "11px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        {title}
      </p>

      <p
        style={{
          fontSize: "22px",
          color: "#fff",
          fontWeight: "500",
          margin: 0,
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default ProjectDetails;
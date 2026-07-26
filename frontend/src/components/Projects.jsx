import { useEffect, useState } from "react";
import { getProjects } from "../services/api.js";
import { Link } from "react-router-dom";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error(error);
        setError("Failed to load projects.");
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        background: "#080808",
        color: "#fff",
        padding: "100px 8%",
      }}
    >
      <div
        style={{
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
            marginBottom: "12px",
          }}
        >
          Selected Work
        </p>

        <h2
          style={{
            fontSize: "56px",
            margin: "0 0 60px",
          }}
        >
          Featured Projects
        </h2>

        {loading && (
          <p
            style={{
              opacity: 0.6,
              fontSize: "18px",
            }}
          >
            Loading projects...
          </p>
        )}

        {error && (
          <p
            style={{
              color: "#ff6b6b",
              fontSize: "18px",
            }}
          >
            {error}
          </p>
        )}

        {!loading && !error && projects.length === 0 && (
          <p
            style={{
              opacity: 0.6,
              fontSize: "18px",
            }}
          >
            No projects added yet.
          </p>
        )}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          {projects.map((project) => (
            <Link
              key={project._id}
              to={`/projects/${project._id}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "block",
              }}
            >
              <div
                style={{
                  background: "#111",
                  border: "1px solid #222",
                  borderRadius: "16px",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    height: "400px",
                    background: "#181818",
                    overflow: "hidden",
                  }}
                >
                  <video
                    src={project.videoUrl}
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls={false}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>

                <div
                  style={{
                    padding: "25px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "26px",
                      margin: "0 0 12px",
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      opacity: 0.6,
                      lineHeight: "1.6",
                      margin: 0,
                    }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { id } = useParams();

  console.log(id);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "48px",
      }}
    >
      Project Details Page
    </div>
  );
}

export default ProjectDetails;
import "./Badge.css";

export default function Badge({ format = "square", color = "gray", children }) {
  return <div className={`badge ${format} ${color}`}> {children} </div>;
}


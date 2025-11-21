import { ReactElement } from "react";
import "./Card.css";
import { CardProps } from "./Card.types";
import { IconUpload } from "./icons/IconUpload";

export function Card({ icon: Icon, title, content }: CardProps): ReactElement {
  const IconComponent = Icon || IconUpload;

  return (
    <div className="card-container">
      <div className="icon-container">
        <IconComponent />
      </div>
      <div className="card-text-wrapper">
        <p className="card-title">{title}</p>
        <p className="card-content">{content}</p>
      </div>
    </div>
  );
}


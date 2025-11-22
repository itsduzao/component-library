import { ReactElement } from "react";
import "./Card.css";
import { CardProps } from "./Card.types";
import { IconUpload } from "./icons/IconUpload";

export function Card({ icon: Icon, title, content }: CardProps): ReactElement {
  const IconComponent = Icon || IconUpload;

  return (
    <article
      className="card-container"
      aria-labelledby="card-title"
      aria-describedby="card-content"
    >
      <div className="icon-container" role="img" aria-label="Card icon">
        <IconComponent aria-hidden="true" />
      </div>
      <div className="card-text-wrapper">
        <h3 id="card-title" className="card-title">
          {title}
        </h3>
        <p id="card-content" className="card-content">
          {content}
        </p>
      </div>
    </article>
  );
}


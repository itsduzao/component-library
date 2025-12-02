import { ReactElement } from "react";
import "./Testimonial.css";
import { TestimonialProps } from "./Testimonial.types";

export function Testimonial({
  logo,
  quote,
  author,
  role,
  logoAlt,
}: TestimonialProps): ReactElement {
  const renderLogo = () => {
    if (typeof logo === "string") {
      return (
        <img
          src={logo}
          alt={logoAlt || `${author} company logo`}
          className="testimonial-logo"
        />
      );
    }

    const LogoComponent = logo;
    return (
      <div
        className="testimonial-logo"
        role="img"
        aria-label={logoAlt || "Company logo"}
      >
        <LogoComponent aria-hidden="true" />
      </div>
    );
  };

  return (
    <article
      className="testimonial-container"
      aria-labelledby="testimonial-author"
    >
      <div className="testimonial-header">{renderLogo()}</div>
      <blockquote className="testimonial-quote">{`“${quote}”`}</blockquote>
      <div className="testimonial-author">
        <p id="testimonial-author" className="testimonial-author-name">
          {author}
        </p>
        <p className="testimonial-author-role">{role}</p>
      </div>
    </article>
  );
}


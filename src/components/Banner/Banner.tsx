import { ReactElement } from "react";
import { BANNER_CONFIG } from "./Banner.config";
import "./Banner.css";
import { BannerProps } from "./Banner.types";

export function Banner({ status, title, content }: BannerProps): ReactElement {
  const config = BANNER_CONFIG[status];
  const Icon = config.icon;

  return (
    <>
      <div
        className={`banner-wrapper banner-${status}`}
        role={config.role}
        aria-live={config.ariaLive}
        aria-labelledby={`banner-title-${status}`}
        aria-describedby={content ? `banner-content-${status}` : undefined}
      >
        <Icon />
        <div className="banner-text-container">
          <span className="banner-title" id={`banner-title-${status}`}>
            {title}
          </span>
          {content && (
            <span className="banner-content" id={`banner-content-${status}`}>
              {content}
            </span>
          )}
        </div>
      </div>
    </>
  );
}


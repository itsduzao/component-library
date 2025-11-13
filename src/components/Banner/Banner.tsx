import { ReactElement } from "react";
import "./Banner.css";
import { BannerProps } from "./Banner.types";
import { IconError } from "./icons/IconError";
import { IconInfo } from "./icons/IconInfo";
import { IconSuccess } from "./icons/IconSuccess";
import { IconWarning } from "./icons/IconWarning";

const ICONS_MAP = {
  success: IconSuccess,
  info: IconInfo,
  warning: IconWarning,
  error: IconError,
};

export function Banner({ status, title, content }: BannerProps): ReactElement {
  const Icon = ICONS_MAP[status];
  return (
    <>
      <div className={`banner-wrapper banner-${status}`}>
        <Icon />
        <div className="banner-text-container">
          <span className="banner-title">{title}</span>
          {content && <span className="banner-content">{content}</span>}
        </div>
      </div>
    </>
  );
}


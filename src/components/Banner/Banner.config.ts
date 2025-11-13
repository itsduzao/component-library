import { ComponentType, SVGProps } from "react"
import { BannerStatus } from "./Banner.types"
import { IconError } from "./icons/IconError"
import { IconInfo } from "./icons/IconInfo"
import { IconSuccess } from "./icons/IconSuccess"
import { IconWarning } from "./icons/IconWarning"

type BannerConfig = {
  icon: ComponentType<SVGProps<SVGSVGElement>>,
  ariaLive: "polite" | "assertive",
  role: "status" | "alert"
}

export const BANNER_CONFIG: Record<BannerStatus, BannerConfig> = {
  success: {
    icon: IconSuccess,
    ariaLive: "polite",
    role: "status"
  },
  info: {
    icon: IconInfo,
    ariaLive: "polite",
    role: "status"
  },
  warning: {
    icon: IconWarning,
    ariaLive: "assertive",
    role: "alert"
  },
  error: {
    icon: IconError,
    ariaLive: "assertive",
    role: "alert"
  }
} as const
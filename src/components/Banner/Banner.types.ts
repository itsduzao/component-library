import { BANNER_STATUSES } from "./Banner.constants";

export type BannerStatus = typeof BANNER_STATUSES[number];

export interface BannerProps {
    status: BannerStatus;
    title: string;
    content?: string;
}
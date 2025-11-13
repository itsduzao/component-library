export const BANNER_STATUSES = ['success', 'info', 'warning', 'error'] as const;
export type BannerStatus = typeof BANNER_STATUSES[number];

export interface BannerProps {
    status: BannerStatus;
    title: string;
    content: string;
}
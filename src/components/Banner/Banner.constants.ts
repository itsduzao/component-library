import { getTypeSummary } from "../../utils/getTypeSummary";

export const BANNER_STATUSES = ['success', 'info', 'warning', 'error'] as const;

export const BANNER_STATUSES_SUMMARY = getTypeSummary(BANNER_STATUSES);
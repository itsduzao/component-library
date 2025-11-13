import { ReactElement } from 'react';
import './Banner.css'
import { IconSuccess } from './icons/IconSuccess';
import { BannerProps } from './Banner.types';
import { IconWarning } from './icons/IconWarning';
import { IconInfo } from './icons/IconInfo';
import { IconError } from './icons/IconError';

const ICONS_MAP = {
    success: IconSuccess,
    info: IconInfo,
    warning: IconWarning,
    error: IconError,
}

export function Banner({ status, title, content }: BannerProps): ReactElement {
    const Icon = ICONS_MAP[status];
    return (
        <>
            <div className={`banner-wrapper banner-${status}`}>
                <Icon />
                <div>
                    <span>{title}</span>
                    <span>{content}</span>
                </div>
            </div>
        </>
    );
}
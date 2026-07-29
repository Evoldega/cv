import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    //allowedDevOrigins: ['db9f-77-91-86-47.ngrok-free.app']
};

export default createNextIntlPlugin('./src/i18n/request.ts')(nextConfig);
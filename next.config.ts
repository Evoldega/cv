import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    webpack(config) {
        config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ["@svgr/webpack"],
        });

        return config;
    },
};

export default createNextIntlPlugin('./src/i18n/request.ts')(nextConfig);
import type { NextConfig } from "next";
const { withContentlayer } = require('next-contentlayer')

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default withContentlayer(nextConfig);

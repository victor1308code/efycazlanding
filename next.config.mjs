/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

const nextConfig = {
  reactStrictMode: true,
  output: isGithubActions ? 'export' : undefined,
  basePath: isGithubActions ? '/efycazlanding' : '',
  assetPrefix: isGithubActions ? '/efycazlanding/' : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubActions ? '/efycazlanding' : '',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

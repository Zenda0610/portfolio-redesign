/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Set basePath to the GitHub repo name so assets load correctly on GitHub Pages
  basePath: '/portfolio-redesign',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

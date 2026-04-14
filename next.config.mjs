/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/habitational',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig

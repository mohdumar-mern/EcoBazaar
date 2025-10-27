/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ['cdn.pixabay.com'], // ✅ Allow this domain
  },

};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['th.bing.com'],
      },
      publicRuntimeConfig: {
 
        SECRET_KEY: process.env.SECRET_KEY,

      },
};

export default nextConfig;

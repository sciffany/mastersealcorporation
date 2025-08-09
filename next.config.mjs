/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/copy-of-home",
        destination: "/products/all",
        permanent: true, // sends a 301
      },
      {
        source: "/copy-of-products",
        destination: "/products/fixed-length",
        permanent: true, // sends a 301
      },
      {
        source: "/copy-of-products-2",
        destination: "/products/variable-length",
        permanent: true, // sends a 301
      },
      {
        source: "/copy-of-products-3",
        destination: "/products/barrier-seal",
        permanent: true, // sends a 301
      },
      {
        source: "/copy-of-products-4",
        destination: "/products/special-purpose",
        permanent: true, // sends a 301
      },
      {
        source: "/copy-of-products-5",
        destination: "/products/all",
        permanent: true, // sends a 301
      },
    ];
  },
};
export default nextConfig;

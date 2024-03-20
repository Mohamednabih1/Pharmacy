/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3-us-west-2.amazonaws.com"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "s3-us-west-2.amazonaws.com",
    //     port: "3001",
    //     pathname: "/s.cdpn.io/567707/",
    //   },
    // ],
  },
};

export default nextConfig;

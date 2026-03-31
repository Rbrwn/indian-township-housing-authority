/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevents browser from loading page in an iframe (clickjacking protection)
          { key: 'X-Frame-Options', value: 'DENY' },
          // Stops browser from guessing content types (MIME sniffing protection)
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Controls how much referrer info is shared when clicking links
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Prevents XSS attacks by controlling what scripts can run
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          // Forces HTTPS for 1 year — never allows insecure HTTP
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          // Controls what browser features the site can use
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
        ],
      },
    ];
  },
};

export default nextConfig;

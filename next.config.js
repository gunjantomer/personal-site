/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: 'custom',
  },
  eslint: {
    dirs: ['app', 'components'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
};

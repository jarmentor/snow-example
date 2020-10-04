module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-optimize',
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
  ],
};

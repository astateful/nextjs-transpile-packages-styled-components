const config = async () => {
  const config = {
    compiler: { styledComponents: true },
    transpilePackages: ['@something/widgets'],
  };

  return config;
};

export default config;

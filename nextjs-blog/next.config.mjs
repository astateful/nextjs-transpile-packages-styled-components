import withTM from 'next-transpile-modules';

const config = async () => {
  const libs = ['@something/widgets'];

  const tm = withTM(libs);

  const config = {
    compiler: { styledComponents: true },
  };

  return tm(config);
};

export default config;

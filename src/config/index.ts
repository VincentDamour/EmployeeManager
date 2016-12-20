import devConfig from './dev.config';
import prodConfig from './prod.config';

const getConfig = () => {
  switch(process.env.ENV) {
    case "start":
      return devConfig;
    case "build:preprod":
      return prodConfig;
    case "build":
      return prodConfig;
    default:
      return prodConfig;
  }
};

export default getConfig();

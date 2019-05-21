import { Platform } from "react-native"


interface Config {
  isWeb: boolean,
  isIos: boolean,
  isAndroid: boolean,
  app: {
    name: string;
  };
  web: {
    root: string;
  };
}

const config: Config = {
  isWeb: Platform.OS === "web",
  isIos: Platform.OS === "ios",
  isAndroid: Platform.OS === "android",
  app: {
    name: "example"
  },
  web: {
    root: "root"
  }
};

export default config
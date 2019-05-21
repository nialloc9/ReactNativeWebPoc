// app entry
import { AppRegistry } from "react-native";
import {App} from "./screens";
import config from "./utils/config";

// register the app
AppRegistry.registerComponent(config.app.name, () => App);

// register the web
if (config.isWeb) {
  AppRegistry.runApplication(config.app.name, {
    rootTag: document.getElementById(config.web.root)
  });
}

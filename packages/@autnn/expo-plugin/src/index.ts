import { ConfigPlugin, withPlugins } from "@expo/config-plugins";
import fs from "node:fs";
import path from "node:path";
import { validateConfig, AutonbdConfig } from "@autonbd/core";

const AUTONBD_CONFIG_FILENAME = "autonbd.config.json";

function readAutonbdConfig(projectRoot: string): AutonbdConfig | null {
  const configPath = path.join(projectRoot, AUTONBD_CONFIG_FILENAME);

  if (!fs.existsSync(configPath)) {
    return null;
  }

  const raw = fs.readFileSync(configPath, "utf8");
  const json = JSON.parse(raw);
  return validateConfig(json);
}

export const withAutonbdConfig: ConfigPlugin = (config) => {
  const projectRoot = config._internal?.projectRoot ?? process.cwd();
  const autonbdConfig = readAutonbdConfig(projectRoot);

  if (!autonbdConfig) {
    return config;
  }

  config.extra = config.extra ?? {};
  config.extra.autonbd = {
    template: autonbdConfig.template,
    theme: autonbdConfig.theme,
    outputDir: autonbdConfig.outputDir,
    framework: autonbdConfig.framework
  };

  return config;
};

export const withAutonbd: ConfigPlugin = (config) => {
  return withPlugins(config, [withAutonbdConfig]);
};

export default withAutonbd;


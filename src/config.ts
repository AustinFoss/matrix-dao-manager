import * as config from "config";

interface IConfig {
    homeserverUrl: string;
    accessToken: string;
    autoJoin: boolean;
    dataPath: string;
    encryption: boolean;
    userId: string;
    userPassword: string;
    deviceName: string;
}

export default <IConfig>config;

import { EnvironmentConfiguration } from "../app/models/environment-configuration";

const serverUrl = 'https://localhost:7271/api';

export const environment:EnvironmentConfiguration = {
  env_name:'dev',
  production:false,
  apiUrl:serverUrl,
  apiEndpoints:{
    userProfile:'user-profiles'
  },
  adb2cConfig:{
    clientId:'21d5f0c0-c487-42bb-a23a-cc601e910338',
    readScopeUrl:'https://learnsmartonline.onmicrosoft.com/learnsmartonline/dev/api/User.Read',
    writeScopeUrl:'https://learnsmartonline.onmicrosoft.com/learnsmartonline/dev/api/User.Write',
    scopeUrls:['https://learnsmartonline.onmicrosoft.com/learnsmartonline/dev/api/User.Write','https://learnsmartonline.onmicrosoft.com/learnsmartonline/dev/api/User.Read'],
    apiEndpointUrl:'https://localhost:7271/api'
  },
  cacheTimeInMins:30
};
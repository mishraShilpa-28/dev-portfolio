// Generated by nitro

// App Config
import type { Defu } from 'defu'

import type { default as appConfig0 } from "../../app.config";

type UserAppConfig = Defu<{}, [typeof appConfig0]>

declare module "nitropack/types" {
  interface AppConfig extends UserAppConfig {}

}
export {}
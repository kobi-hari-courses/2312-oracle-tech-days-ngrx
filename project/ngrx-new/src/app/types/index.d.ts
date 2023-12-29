// based on documentation found on 
// https://github.com/reduxjs/redux-devtools/blob/main/extension/docs/API/Methods.md

import { ReduxDevtoolsConnection } from "./redux-messages";


declare global {

  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__:
      | {
          connect: (options: { name: string }) => ReduxDevtoolsConnection, 
        }
      | undefined;
  }
}

export {};

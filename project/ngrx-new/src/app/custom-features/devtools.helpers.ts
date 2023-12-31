import { StateSignal } from '@ngrx/signals/src/state-signal';
import {
    ReduxAction,
  ReduxActionType,
  ReduxDevtoolsConnection,
  ReduxDevtoolsUnsubscriber,
  ReduxState,
} from '../types/redux-messages';
import { getState, patchState } from '@ngrx/signals';

type Store = StateSignal<ReduxState>;
type Session = {
  readonly connection: ReduxDevtoolsConnection, 
  readonly unsubscriber: ReduxDevtoolsUnsubscriber
}

export function reduxDevtoolsInit(instanceName: string, store: Store): Session | null {
  if (!window.__REDUX_DEVTOOLS_EXTENSION__) return null;
  const connection = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
    name: instanceName,
  });
  const state = getState(store);
  connection.init(state);
  const unsubscriber = connection.subscribe(msg => {
    if ((msg.type === 'DISPATCH') && (msg.payload.type === 'JUMP_TO_ACTION')) {
      const state = JSON.parse(msg.state);
      patchState(store, state);
      console.log(msg);
    }else {
    }
  })

  return {connection, unsubscriber} ;
}

export function reduxDevtoolsSend(
  session: Session | null,
  action: ReduxAction,
  store: Store
) {
  if (!session) return;
  const state = getState(store);
  session.connection.send(action, state);
}

export function reduxDevtoolsDestroy(session: Session | null): void {
  session?.unsubscriber();
}

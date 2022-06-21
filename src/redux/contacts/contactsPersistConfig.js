import storage from 'redux-persist/lib/storage';
import { LOCALSTOREGE_KEY } from 'helpers/variablesHelper';

export const contactsPersistConfig = {
  key: LOCALSTOREGE_KEY,
  storage,
  blacklist: ['filter'],
};

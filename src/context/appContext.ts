import { createContext } from 'react';

import { AppContext } from './models';

export const appContext = createContext<AppContext | null>(null);
import { Dispatch, SetStateAction } from 'react';

import { Positions } from "../utils/requests/models";

export interface AppContext {
    positions: Positions,
    updatePositions: Dispatch<SetStateAction<Positions>>,
}
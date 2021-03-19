import axios from 'axios';

import { Positions } from './models';

const baseRequest = <T>(
    url: string,
    opts?: {},
): Promise<T> => fetch(url, { credentials: 'same-origin', ...opts })
    .then(resp => resp.json() as Promise<T>)
    .catch(err => { throw err })

export const getPositions = () => baseRequest<Positions>('https://jobs.github.com/positions.json');
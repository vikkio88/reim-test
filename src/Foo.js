import React from 'react';
import { get, set } from './store';

export default () => {
    return get(s => <input value={s.name} onChange={ev => set({ name: ev.target.value })} />)
}
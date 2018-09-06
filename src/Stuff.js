import React from 'react';
import { get } from './store';

export default () => <h1>{get(s => s.name)}</h1>;
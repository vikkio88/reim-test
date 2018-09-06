import reim from 'reim';
import { context } from 'react-reim';

// create a store
const { get, set } = reim({ name: 'Peter' }).plugin(context());

export { get, set };
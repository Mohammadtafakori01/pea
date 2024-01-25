import {DevicesSchema} from '../schemas/DeviceShema';
import { Logs } from '../schemas/Logs';
import {LastStateSchema} from '../schemas/lastStateSchema';
import Database from './Database';

const DB = new Database([DevicesSchema, LastStateSchema, Logs]);

export {DB};

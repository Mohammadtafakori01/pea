import { Alarms } from '../schemas/Alarms';
import { CallType } from '../schemas/CallType';
import { Chirps } from '../schemas/Chirps';
import {DateTime} from '../schemas/DateTime';
import {DevicesSchema} from '../schemas/DeviceShema';
import {DingDong} from '../schemas/DingDong';
import {Logs} from '../schemas/Logs';
import {PNumbers} from '../schemas/PNumbers';
import {Reles} from '../schemas/Reles';
import { Remotes } from '../schemas/Remotes';
import {Report} from '../schemas/Report';
import {Users} from '../schemas/Users';
import {Zones} from '../schemas/Zones';
import {LastStateSchema} from '../schemas/lastStateSchema';
import Database from './Database';

const DB = new Database([
  DevicesSchema,
  LastStateSchema,
  Logs,
  Reles,
  Zones,
  DingDong,
  DateTime,
  Users,
  PNumbers,
  Report,
  Remotes,
  Chirps,
  CallType,
  Alarms,
]);
let options = {
  device_id: 0,
};
export {DB, options};

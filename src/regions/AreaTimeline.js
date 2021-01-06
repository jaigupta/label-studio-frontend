import { types, getParent, getEnv, getRoot, destroy, detach, onSnapshot, isAlive } from "mobx-state-tree";
import Area from "./Area";

const TimestampedArea = types.model({
  timestamp: types.number,
  area: Area,
});

const AreaTimeline = types.model({
  id: types.identifier,
  timeline: types.array(TimestampedArea),
});

export default AreaTimeline;

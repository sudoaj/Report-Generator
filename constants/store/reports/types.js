const [Patrol, setPatrol] = useState(false);
const [LockedDoors, setLockedDoors] = useState(false);
const [UnLockedDoors, setUnLockedDoors] = useState(false);
const [MonitoredCamera, setMonitoredCamera] = useState(false);
const [SecurityRisk, setSecurityRisk] = useState(false);
const [ExtraNotes, setExtraNotes] = useState(false);
const [AttachedFile, setAttachedFile] = useState(false);

export const SET_LOADING = "SET_LOADING";
export const SET_PATROL = "SET_PATROL";
export const SET_LOCKED_DOORS ="SET_LOCKED_DOORS";
export const SET_UNLOCKED_DOORS = "SET_UNLOCKED_DOORS";
export const SET_MONITORED_CAMERA = "SET_MONITORED_CAMERA"
export const SET_SECURITY_RISK = "SET_SECURITY_RISK"
export const SET_EXTRANOTES 
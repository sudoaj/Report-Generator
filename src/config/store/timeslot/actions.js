import {
	SET_TIME_SLOT_NAME,
	SET_TIME_SLOT_COLOR,
	SET_PATROL_STATE,
	SET_PATROL_NOTE,
	SET_LOCKED_DOOR_STATE,
	SET_LOCKED_DOOR_NOTE,
	SET_UNLOCKED_DOORS_STATE,
	SET_UNLOCKED_DOORS_NOTE,
	SET_MONITORED_CAMERA_STATE,
	SET_MONITORED_CAMERA_NOTE,
	SET_SECURITY_RISK_STATE,
	SET_SECURITY_RISK_NOTE,
	SET_EXTRA_NOTE_STATE,
	SET_EXTRA_NOTE_NOTE,
	SET_ATTACHED_FILE_STATE,
	SET_ATTACHED_FILE_NOTE,
	SET_EDITTED,
} from "./types";

export const editSlot = (index, data) => (dispatch) => {
	dispatch({
		type: SET_EDITTED,
		payload: data,
		index,
	});
};
export const setTimeSlotName = (timeSlotName) => (dispatch) => {
	dispatch({
		type: SET_TIME_SLOT_NAME,
		payload: timeSlotName,
	});
};

export const setTimeSlotColor = (timeSlotColor) => (dispatch) => {
	dispatch({
		type: SET_TIME_SLOT_COLOR,
		payload: timeSlotColor,
	});
};
export const setPatrolState = (patrolState) => (dispatch) => {
	dispatch({
		type: SET_PATROL_STATE,
		payload: patrolState,
	});
};

export const setPatrolNote = (patrolNote) => (dispatch) => {
	dispatch({
		type: SET_PATROL_NOTE,
		payload: patrolNote,
	});
};

export const setLockedDoorState = (lockedDoorstate) => (dispatch) => {
	dispatch({
		type: SET_LOCKED_DOOR_STATE,
		payload: lockedDoorstate,
	});
};

export const setLockedDoorNote = (lockedDoorNote) => (dispatch) => {
	dispatch({
		type: SET_LOCKED_DOOR_NOTE,
		payload: lockedDoorNote,
	});
};

export const setUnlockedDoorState = (unlockedDoorState) => (dispatch) => {
	dispatch({
		type: SET_UNLOCKED_DOORS_STATE,
		payload: unlockedDoorState,
	});
};
export const setUnlockedDoorNote = (unlockedDoorNote) => (dispatch) => {
	dispatch({
		type: SET_UNLOCKED_DOORS_NOTE,
		payload: unlockedDoorNote,
	});
};

export const setMonitoredCameraState = (monitoredCameraState) => (dispatch) => {
	dispatch({
		type: SET_MONITORED_CAMERA_STATE,
		payload: monitoredCameraState,
	});
};

export const setMonitoredCameraNote = (monitoredCameraNote) => (dispatch) => {
	dispatch({
		type: SET_MONITORED_CAMERA_NOTE,
		payload: monitoredCameraNote,
	});
};

export const setSecurityRiskState = (securityRiskState) => (dispatch) => {
	dispatch({
		type: SET_SECURITY_RISK_STATE,
		payload: securityRiskState,
	});
};

export const setSecurityRiskNote = (securityRiskNote) => (dispatch) => {
	dispatch({
		type: SET_SECURITY_RISK_NOTE,
		payload: securityRiskNote,
	});
};
export const setExtraNoteState = (extraNoteState) => (dispatch) => {
	dispatch({
		type: SET_EXTRA_NOTE_STATE,
		payload: extraNoteState,
	});
};

export const setExtraNoteNote = (extraNoteNote) => (dispatch) => {
	dispatch({
		type: SET_EXTRA_NOTE_NOTE,
		payload: extraNoteNote,
	});
};

export const setAttachedFileState = (attachedFileState) => (dispatch) => {
	dispatch({
		type: SET_ATTACHED_FILE_STATE,
		payload: attachedFileState,
	});
};
export const setAttachedFileNote = (attachedFileNote) => (dispatch) => {
	dispatch({
		type: SET_ATTACHED_FILE_NOTE,
		payload: attachedFileNote,
	});
};

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

const initialData = {
	formData: [
		{
			timeSlotName: "1900",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2000",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},

		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
		{
			timeSlotName: "2100",
			timeSlotColor: "grey",
			patrolState: false,
			patrolNotes: "",
			lockedDoorState: false,
			lockedDoorNotes: "",
			unlockedDoorState: false,
			unlockedDoorNotes: "SEE?",
			monitoredCameraState: false,
			monitoredCameraNote: "",
			securityRiskState: false,
			securityRiskNote: "",
			extraNoteState: false,
			extraNoteNote: "",
			attachedFileState: false,
			attachedFileStateNote: "",
		},
	],
};
export default (state = { initialData }, action) => {
	switch (action.type) {
		case SET_TIME_SLOT_NAME:
			return { ...state, timeSlotName: action.payload };
		case SET_TIME_SLOT_COLOR:
			return { ...state, timeSlotColor: action.payload };
		case SET_PATROL_STATE:
			return { ...state, patrolState: action.payload };
		case SET_PATROL_NOTE:
			return { ...state, patrolNote: action.payload };
		case SET_LOCKED_DOOR_STATE:
			return { ...state, lockedDoorState: action.payload };
		case SET_LOCKED_DOOR_NOTE:
			return { ...state, lockedDoorNote: action.payload };
		case SET_UNLOCKED_DOORS_STATE:
			return { ...state, unlockedDoorState: action.payload };
		case SET_UNLOCKED_DOORS_NOTE:
			return { ...state, unlockedDoorNote: action.payload };
		case SET_MONITORED_CAMERA_STATE:
			return { ...state, monitoredCameraState: action.payload };
		case SET_MONITORED_CAMERA_NOTE:
			return { ...state, monitoredCameraNote: action.payload };
		case SET_SECURITY_RISK_STATE:
			return { ...state, securityRiskState: action.payload };
		case SET_SECURITY_RISK_NOTE:
			return { ...state, securityRiskNote: action.payload };
		case SET_EXTRA_NOTE_STATE:
			return { ...state, extraNoteState: action.payload };
		case SET_EXTRA_NOTE_NOTE:
			return { ...state, extraNotesNote: action.payload };
		case SET_ATTACHED_FILE_STATE:
			return { ...state, attachedFileState: action.payload };
		case SET_ATTACHED_FILE_NOTE:
			return { ...state, attachedFileNote: action.payload };
		case SET_EDITTED:
			let newData = { ...state.initialData };
			newData.formData[action.index] = action.payload;
			return { ...state, initialData: newData };
		default:
			return state;
	}
};

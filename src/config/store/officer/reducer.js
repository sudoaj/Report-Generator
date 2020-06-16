import {
	SET_OFFICER_NAME,
	SET_DATE,
	SET_SITE_LOCATION,
	SET_TIME,
	SET_TOTAL_WORK_TIME
} from "./types";

export default (state = {}, action) => {
	switch (action.type) {
		case SET_OFFICER_NAME:
			return { ...state, officerName: action.payload };
		case SET_DATE:
			return { ...state, reportDate: action.payload };
		case SET_SITE_LOCATION:
			return { ...state, reportSiteLocation: action.payload };
		case SET_TIME:
			return { ...state, reportTime: action.payload };
		case SET_TOTAL_WORK_TIME:
			return { ...state, totalWorkTime: action.payload };
		default:
			return state;
	}
};



import {
	SET_LOADING,
	SET_OFFICER_NAME,
	SET_DATE,
	SET_SITE_LOCATION,
	SET_TIME,
	SET_TOTAL_WORK_TIME,
} from "./types";

export const setLoading = (loading) => (dispatch) => {
	dispatch({
		type: SET_LOADING,
		payload: loading,
	});
};

export const setOfficerName = (officerName) => (dispatch) => {
	dispatch({
		type: SET_OFFICER_NAME,
		payload: officerName,
	});
};

export const setReportDate = (reportDate) => (dispatch) => {
	dispatch({
		type: SET_DATE,
		payload: reportDate,
	});
};

export const setSiteLocation = (reportSiteLocation) => (dispatch) => {
	dispatch({
		type: SET_SITE_LOCATION,
		payload: reportSiteLocation,
	});
};

export const setReportTime = (reportTime) => (dispatch) => {
	dispatch({
		type: SET_TIME,
		payload: reportTime,
	});
};

export const setTotalWorkTime = (totalWorkTime) => (dispatch) => {
	dispatch({
		type: SET_TOTAL_WORK_TIME,
		payload: totalWorkTime,
	});
};

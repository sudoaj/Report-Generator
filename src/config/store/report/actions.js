import { STORE_REPORT_NAME, STORE_REPORT_USER, STORE_REPORT } from "./types";

export const storeReportName = (reportName) => (dispatch) =>
  dispatch({
    type: STORE_REPORT_NAME,
    data: reportName,
  });

export const storeReportUser = (reportUser) => (dispatch) =>
  dispatch({
    type: STORE_REPORT_USER,
    data: reportUser,
  });

export const storeReport = (report) => (dispatch) =>
  dispatch({
    type: STORE_REPORT,
    data: report,
  });

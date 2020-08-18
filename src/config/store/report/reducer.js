import { STORE_REPORT_NAME, STORE_REPORT_USER, STORE_REPORT } from "./types";
let initial = {
  report: Array(3)
    .fill("")
    .map((_, i) => ({
      key: i+1,
      title: `title${i + 1}`,
      data: [
        ...Array(4)
          .fill("")
          .map((_, j) => ({
            key: `${i}.${j}`,
            time: `${j} of ${i}`,
            text: `${j}  All clear for the hour. No activity goin on All clear for the hour.No activity goin on`,
          })),
      ],
    })),
};
export default (state = initial, action) => {
  switch (action.type) {
    case STORE_REPORT_NAME:
      return {
        ...state,
        reportname: action.data,
      };
    case STORE_REPORT_USER:
      return {
        ...state,
        reportuser: action.data,
      };
    case STORE_REPORT:
      return {
        ...state,
        report: action.data,
      };
    default:
      return state;
  }
};

// Array(3)
//         .fill("")
//         .map((_, i) => ({
//           title: `title${i + 1}`,
//           data: [
//             ...Array(3)
//               .fill("")
//               .map((_, j) => ({
//                 key: `${i}.${j}`,
//                 time: `${j} of ${i}`,
//                 text: `${j}  All clear for the hour. No activity goin on All clear for the hour.No activity goin on`,
//               })),
//           ],
//         })),

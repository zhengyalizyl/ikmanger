import * as constants from "./actionTypes"
const defaultState = {
    homeData: {
    },
    sowingData: [],
    userData: {},
    studentData: [],
    categoryData: [],
    addCourseData: {},
    courseData: [],
    docentData: [],
};

let newState = "";
export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.IINIT_HOME_DATA:
            newState = JSON.parse(JSON.stringify(state));
            newState.homeData = action.homeData;
			//return {...state,...action.homeData}
            return newState;
        case constants.IINIT_SOWING_DATA:
            newState = JSON.parse(JSON.stringify(state));
            newState.sowingData = action.sowingData;
            return newState;
        case constants.IINIT_USER_DATA:
            newState = JSON.parse(JSON.stringify(state));
            sessionStorage.setItem("userData", JSON.stringify(action.userData))
            newState.userData = action.userData;
            return newState;
        case constants.IINIT_STUDENT_DATA:
            newState = JSON.parse(JSON.stringify(state));
            newState.studentData = action.studentData;
            return newState;
        case constants.IINIT_CATEGORY_DATA:
            newState = JSON.parse(JSON.stringify(state));
            newState.categoryData = action.categoryData;
            return newState;
        case constants.IINIT_COURSE_DATA:
            newState = JSON.parse(JSON.stringify(state));
            newState.courseData = action.courseData;
            return newState;
        case constants.IINIT_DOCENT_DATA:
            newState = JSON.parse(JSON.stringify(state));
            newState.docentData = action.docentData;
            return newState;
        default:
            return state
    }
}





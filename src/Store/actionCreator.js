import * as constants from "./actionTypes"
import { getHomeData ,getSowingData ,addSowingData ,removeSowingData,getUserData,editUserData,getStudentData ,getCategoryData,getCourseData,getDocentData} from "./../Api/index"

//获取首页数据
export const getHomeDataAction= ()=>{
    return (dispatch)=>{
        //请求网络数据
        getHomeData().then(res=>{
            if(res.status_code == 200){
                const homeData=res.result[0];
                dispatch({
                    type: constants.IINIT_HOME_DATA,
                    homeData
                })
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//获取轮播图数据
export const getSowingDataAction= (data)=>{
    return (dispatch)=>{
        //请求网络数据
        getSowingData(data).then(res=>{
            if(res.status_code == 200){
                const  sowingData=res.result;
                dispatch({
                    type: constants.IINIT_SOWING_DATA,
                    sowingData
                })
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//添加轮播图数据
export const addSowingDataAction= ()=>{
    return (dispatch)=>{
        //请求网络数据
        addSowingData().then(res=>{
            if(res.status_code == 200){
                const  sowingData=res.result;
                dispatch({
                    type: constants.ADD_SOWING_DATA,
                    sowingData
                })
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//删除轮播图
export const removeSowingDataAction= ()=>{
    return (dispatch)=>{
        //请求网络数据
        removeSowingData().then(res=>{
            if(res.status_code == 200){
                const  sowingData=res.result;
                dispatch({
                    type: constants.REMOVE_SOWING_DATA,
                    sowingData
                })
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//获取用户信息
export const getUserDataAction= (data,callback)=>{
    return (dispatch)=>{
        //请求网络数据
        console.log(data)
        getUserData(data).then(res=>{
            console.log(data,res)
            if(res.status_code == 200){
               
                const  userData=res.result;
                dispatch({
                    type: constants.IINIT_USER_DATA,
                    userData
                })
                callback&&callback(userData)
            }else{
               // alert(res.result)
                callback&&callback(res.result)
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//修改用户信息
export const editUserDataAction= (data,callback)=>{
    return (dispatch)=>{
        //请求网络数据
        console.log(data)
        editUserData(data).then(res=>{
            console.log(data,res)
            if(res.status_code == 200){
               console.log(res)
                const  userData=res.result;
                dispatch({
                    type: constants.EDIT_USER_DATA,
                    userData
                })
                callback&&callback(userData)
            }else{
                alert(res.result)
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//请求用户数据
export const getStudentDataAction= (params)=>{
    return (dispatch)=>{
        //请求网络数据
        getStudentData(params).then(res=>{
            console.log(res)
            if(res.status_code == 200){
               
                const  studentData=res.result;
                dispatch({
                    type: constants.IINIT_STUDENT_DATA,
                    studentData
                })
                //callback&&callback(userData)
            }else{
                alert(res.result)
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}
//请求课程列表数据
export const getCategoryDataDataAction= (params)=>{
    return (dispatch)=>{
        //请求网络数据
        getCategoryData(params).then(res=>{
            console.log(res)
            if(res.status_code == 200){
               
                const  categoryData=res.result;
                dispatch({
                    type: constants.IINIT_CATEGORY_DATA,
                    categoryData
                })
            }else{
                alert(res.result)
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//获得课程信息
// IINIT_COURSE_DATA
export const getCourseDataAction= (params)=>{
    return (dispatch)=>{
        //请求网络数据
        getCourseData(params).then(res=>{
            if(res.status_code == 200){ 
                const  courseData=res.result;
                dispatch({
                    type: constants.IINIT_COURSE_DATA,
                    courseData
                })
            }else{
                alert(res.result)
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}

//获取运营商数据
export const getDocentDataAction= (params)=>{
    return (dispatch)=>{
        //请求网络数据
        getDocentData(params).then(res=>{
            if(res.status_code == 200){ 
                const  docentData=res.result;
                dispatch({
                    type: constants.IINIT_DOCENT_DATA,
                    docentData
                })
            }else{
                alert(res.result)
            }

        }).catch((err)=>{
            console.log(err)
        })
    }
}
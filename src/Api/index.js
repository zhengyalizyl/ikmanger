import ajax from './ajax'

// 0. 定义基础路径
const BASE_URL = '';

// 1. 请求首页的数据
export const getHomeData = () => ajax(BASE_URL + '/home/api/list');
//2.请求轮播图数据的记录数
export const  getSowingCountData = () => ajax(BASE_URL+ '/sowing/api/count');
// 2. 请求轮播图的数据
export const getSowingData = (data) => ajax(BASE_URL + '/sowing/api/list',data);
// 3. 添加轮播图数据
export const addSowingData = (data)=> ajax(BASE_URL + '/sowing/api/add', data, 'POST');
// 4. 删除一条轮播图数据
export const removeSowingData = (id)=>ajax(BASE_URL + '/sowing/api/remove/' + id);
// 5. 修改轮播图数据
export const editSowingData = (data)=> ajax(BASE_URL + '/sowing/api/edit', data, 'POST');
// 6. 用户登录
export const getUserData = (data)=> ajax(BASE_URL + '/user/api/login', data, 'POST');
// 7. 修改用户数据
export const editUserData = (data)=> ajax(BASE_URL + '/user/api/edit', data, 'POST');
// 8. 修改用户密码
export const editPwdData = (data)=> ajax(BASE_URL + '/user/api/reset', data, 'POST');
// 9. 请求用户的数据
export const getStudentData = (data) => ajax(BASE_URL + '/stu/api/list',data);
// 10. 请求用户的数据条数
export const getStudentCountData = () => ajax(BASE_URL + '/stu/api/count');
//11.请求课程分类列表数据
export const getCategoryData = (data) => ajax(BASE_URL + '/category/api/list',data);
//
export const addCategoryData = (data) => ajax(BASE_URL + '/category/api/add',data,"POST");
//
export const editCategoryData = (data) => ajax(BASE_URL + '/category/api/edit',data,"POST");
//
export const getCategoryMainTitlData = () => ajax(BASE_URL + '/category/api/main_title');
//12.添加课程数据
export const addSourseData = (data) => ajax(BASE_URL + '/course/api/add',data,"POST");
//请求课程分类列表的记录数
export const getCourseCountData = () =>ajax(BASE_URL + '/course/api/count');
//13.获取课程列表数据
export const getCourseData = (data) => ajax(BASE_URL + '/course/api/list',data);
//获取运营中心的数据
export const getDocentData = (data) => ajax(BASE_URL + '/docent/api/list',data);
//添加运营中心数据
export const addDocentData = (data) => ajax(BASE_URL + '/docent/api/add',data,'POST');
//编辑运营中心数据
export const editDocentData = (data) => ajax(BASE_URL + '/docent/api/edit',data,'POST');
//运营中心的数据条数
export const  getDocentCountData = () =>ajax(BASE_URL + '/docent/api/count');
//删除运营中心的数据
export const removeDocentData = (id) => ajax(BASE_URL + '/docent/api/remove/'+id);


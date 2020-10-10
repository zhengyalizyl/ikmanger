import React, { Component } from 'react'

class LKTool {
    fileToBase64Url(file, callback) {
        //1.修改图片信息
        const reader = new FileReader();
        let src = "";
        if (file) {
            reader.readAsDataURL(file);
        } else {
            src = ""
        }
        //2.阅读器已经解析完毕
        reader.onloadend = () => {
            src = reader.result;
            console.log(src)
            //回调返回
            callback && callback(src);

        }

    }
}
export default LKTool;
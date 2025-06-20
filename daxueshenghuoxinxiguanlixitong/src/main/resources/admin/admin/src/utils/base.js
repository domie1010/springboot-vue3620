const base = {
    get() {
        return {
            url : "http://localhost:8080/daxueshenghuoxinxiguanlixitong/",
            name: "daxueshenghuoxinxiguanlixitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/daxueshenghuoxinxiguanlixitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "大学校园生活信息平台"
        } 
    }
}
export default base

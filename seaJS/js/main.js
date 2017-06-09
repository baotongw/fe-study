seajs.config({
    // Sea.js 的基础路径（修改这个就不是路径就不是相对于seajs文件了）
    base: './js',
    // 别名配置（用变量表示文件，解决路径层级过深和实现路径映射）
    alias: {
        'jquery': 'https://cdn.bootcss.com/jquery/3.2.1/jquery',
        'underscore': 'https://cdn.bootcss.com/underscore.js/1.8.3/underscore'
    },
    // 路径配置（用变量表示路径，解决路径层级过深的问题）
    path: {

    }
})

function init(domCreator) {
    let content = document.getElementById('content');
    let title = content.querySelector('.title');

    title.innerHTML = 'Hello SeaJS. Main Module loaded.';

    let list = content.querySelector('.list');
    let itemDom = domCreator.getListItem('1 - Main Module Item');
    list.appendChild(itemDom);
}

// 文件名就是模块名
seajs.use(['domCreator', 'jquery', 'underscore'], (domCreator) => {
    init(domCreator);
})
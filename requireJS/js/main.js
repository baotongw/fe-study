require.config({
    // basexUrl: '../lib',
    // 定义变量别名
    shim: {
        'underscore': {
            exports: '_'
        },
        'jquery': {
            exports: '$'
        }
    },
    paths: {
        'jquery': 'https://cdn.bootcss.com/jquery/3.2.1/jquery',
        'underscore': 'https://cdn.bootcss.com/underscore.js/1.8.3/underscore'
    }
})

function init(domCreator) {
    let content = document.getElementById('content');
    let title = content.querySelector('.title');

    title.innerHTML = 'Hello RequireJS. Main Module loaded.';

    let list = content.querySelector('.list');
    let itemDom = domCreator.getListItem('1 - Main Module Item');
    list.appendChild(itemDom);
}

require(['domCreator', 'jquery', 'underscore'], (domCreator) => {
    console.log(_)
    console.log(typeof _)
    console.log(typeof $.ajax)
    init(domCreator);
})
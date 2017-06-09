// CMD模式下的模块写法

define((require, exports, module) => {
    // 这种写法会报错，不能指定给$符号
    // let $ = require('jquery');
    let jq = require('jquery'); // jq这里等于undefined

    let creator = {
        getListItem: function(text) {
            let node = $(`<li>${text}</li>`);

            // let node = document.createElement('li');
            // node.innerText = text;
            return node[0];
        }
    }

    module.exports = creator;
})
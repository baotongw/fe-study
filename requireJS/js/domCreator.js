// define(() => {
//     let creator = {
//         getListItem: function(text) {
//             let node = document.createElement('li');
//             node.innerText = text;
//             return node;
//         }
//     }

//     return {
//         creator: creator
//     }    
// })

// AMD模式下的模块写法

define(['jquery'], ($) => {
    let creator = {
        getListItem: function(text) {
            let node = $(`<li>${text}</li>`);

            // let node = document.createElement('li');
            // node.innerText = text;
            return node[0];
        }
    }

    return creator;
})
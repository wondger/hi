/*
 * @name: index.js
 * @description: 
 * @author: wondger@gmail.com
 * @date: 2013-11-06
 * @param: 
 * @todo: 
 * @changelog: 
 */
module.exports = exports = {
    map: function(url, list) {
        if (!list || !list.length) return;

        list.some(function(o) {
            if (o.pattern === url) {
                url = o.replacer;
            }
        });


        return url;
    }
}

//module.exports = {
//    plugins: [
//        require('precss'),
//        require('autoprefixer'),
//        require('postcss-sass'),
//        require('postcss-scss')
//    ]
//}

module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: 'last 5 version' //前五种浏览器版本
        })
    ]
};
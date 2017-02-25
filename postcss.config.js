/**
 * Created by rqzheng on 2017/2/15.
 */
module.exports = {
    plugins: [
        require('postcss-cssnext')({
            browsers: ['last 5 versions', 'IE >= 10', 'Chrome >= 37', 'iOS >=7']
        }),
    ]
}
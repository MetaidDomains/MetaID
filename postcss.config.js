
module.exports = {
    plugins: {

        'postcss-pxtorem': {
            rootValue({ file }) {
                if(file.includes('vant')||file.includes('nut')){
                    return  37.5
                }else{
                    return  75
                }
            },
            propList: ['*'],
        },
    },
}
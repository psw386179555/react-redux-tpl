const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');

const app = new Koa();
const router = new Router();
 

let homeAdData = require('./home/ad.js')
router.get('/',function (ctx, next){
    ctx.body = homeAdData
});


// 首页 —— 推荐列表（猜你喜欢）
let homeListData = require('./home/list.js')
router.get('/api/homelist',function (ctx, next){
    ctx.body = homeListData
});


app.use(cors())
app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);

console.log('start at port 8000')




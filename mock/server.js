const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa2-cors');

const app = new Koa();
const router = new Router();
 

let homeListData = require('./home/list.js')
router.get('/api/homelist',function (ctx, next){
    ctx.body = homeListData
});


let userInfo = require('./user/user.js')
router.post('/api/user/login',function (ctx, next){
	let num = 2
	let ret = {
		state:200
		,token:'fgfd5fd4g5sgr2g1d2fg4sd5'
		,data:userInfo[num]
	}
    ctx.body = ret
});




app.use(cors())
app.use(router.routes()).use(router.allowedMethods());

app.listen(8000);

console.log('start at port 8000')




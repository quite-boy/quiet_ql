'use strict';

const Koa = require('koa');
const cors = require('@koa/cors');
const Router = require('@koa/router');
const body = require('koa-body');
const serve = require('koa-static');
const User = require('./user');
const packageJson = require('./package.json');
const fs = require('fs');
const { exec } = require('child_process');
const { getAssets, getAssetsM,getEnvs } = require('./ql');
// Create express instance
const app = new Koa();
const router = new Router();

const handler = async (ctx, next) => {
  try {
    await next();
    if (ctx.body?.data.message) {
      ctx.body.message = ctx.body.data.message;
      ctx.body.data.message = undefined;
    }
  } catch (err) {
    console.log(err);
    ctx.status = err.statusCode || err.status || 500;
    ctx.body = {
      code: err.status || err.statusCode || 500,
      message: err.message,
    };
  }
};

app.use(serve('static'));
app.use(cors());
app.use(handler);
app.use(router.routes()).use(router.allowedMethods());

router.get('/api/status', (ctx) => {
  ctx.body = {
    code: 200,
    data: {
      version: packageJson.version,
    },
    message: 'Ninja is already.',
  };
});

router.get('/api/info', async (ctx) => {
  const data = await User.getPoolInfo();
  ctx.body = { data };
});

router.get('/api/qrcode', async (ctx) => {
  const user = new User({});
  await user.getQRConfig();
  ctx.body = {
    data: {
      token: user.token,
      okl_token: user.okl_token,
      cookies: user.cookies,
      QRCode: user.QRCode,
      ua: user.ua,
    },
  };
});

router.get('/api/assets', async (ctx) => {
  const query = ctx.query;
  const pin = query.pin;
  const type = query.type
  if (type === 'day') {
    const data = await getAssets(pin)
    ctx.body = { data }
  } else {
    const data = await getAssetsM(pin)
    ctx.body = { data }
  }
});

router.post('/api/check', body(), async (ctx) => {
  const body = ctx.request.body;
  const user = new User(body);
  const data = await user.checkQRLogin();
  ctx.body = { data };
});

router.post('/api/cklogin', body(), async (ctx) => {
  const body = ctx.request.body;
  const user = new User(body);
  const data = await user.CKLogin();
  ctx.body = { data };
});

router.get('/api/userinfo', async (ctx) => {
  const query = ctx.query;
  const eid = query.eid;
  const pin = query.pin;
  const user = new User({ eid, pin });
  const data = await user.getUserInfoByEid();
  ctx.body = { data };
});

router.post('/api/delaccount', body(), async (ctx) => {
  const body = ctx.request.body;
  const eid = body.eid;
  const user = new User({ eid });
  const data = await user.delUserByEid();
  ctx.body = { data };
});

router.post('/api/update/remark', body(), async (ctx) => {
  const body = ctx.request.body;
  const eid = body.eid;
  const remark = body.remark;
  const user = new User({ eid, remark });
  const data = await user.updateRemark();
  ctx.body = { data };
});

router.post('/api/add', body(), async (ctx) => {
  //editDependencies({key:"WUHU",value:"534534",filepath:'./config.json',type:"quiet"})
  const body = ctx.request.body;
  const data = body.guid
  ctx.body = {
    data
  }
});
// 读取配置文件
router.get('/api/getConfig', async (ctx) => {
    const query=ctx.query
    const key=query.key
if (process.env.QUIET_KEY == key) {
    const data = fs.readFileSync('./.env', 'utf8')
  ctx.body = {
    data
  }
}else{
     ctx.body={
          data:{
              code:400,
          message:'key错误'
          }
      }
}
  
});
// 豆子
router.get('/api/bean', async (ctx) => {
  const query = ctx.query;
  const ck = query.ck
  const user = new User({});
  const data = await user.getBean(ck)
  ctx.body = { data }
});
router.get('/api/userList', async (ctx) => {
      const query = ctx.query
  const key = query.key
  if (process.env.QUIET_KEY == key) {
 const data = await getEnvs()
  ctx.body = { data }
  }else{
      ctx.body={
          data:{
              code:400,
          message:'key错误'
          }
      }
  }
 
});
router.get('/api/beanTwo', async (ctx) => {
  const query = ctx.query;
  const ck = query.ck
  const page = query.page
  const user = new User({});
  const data = await user.getBeanTwo(ck, page)
  ctx.body = { data }
});
router.post('/api/getConfig', body(), async (ctx) => {
  const body = ctx.request.body
  const key = ctx.request.key
  const data = body.data
  if (process.env.QUIET_KEY == key) {
  fs.writeFileSync('./.env', data);
  exec(`pm2 restart app.js`, (e, k, l) => { })
  ctx.body = { data }
  }else{
            ctx.body={
          data:{
              code:400,
          message:'key错误'
          }
      }
  }
});
router.get('/api/users', async (ctx) => {
  if (ctx.host.startsWith('localhost')) {
    const data = await user.getUsers();
    ctx.body = { data };
  } else {
    ctx.body = {
      code: 401,
      message: '该接口仅能通过 localhost 访问',
    };
  }
});

router.get('/api/getConfigWeb', async (ctx) => {
    const query=ctx.query;
          const data = fs.readFileSync('./config.json', 'utf8')
  ctx.body = {
    data
  }

});
router.get('/api/logo', async (ctx) => {
    const query=ctx.query;
          const data = JSON.parse(fs.readFileSync('./config.json', 'utf8')).quiet.LOGO
  ctx.body = {
    data
  }

});
router.get('/api/DetectionCookie', async (ctx) => {
    const query=ctx.query;
    const ck=query.ck;
    const key=query.key
    if (process.env.QUIET_KEY == key) {
          const user=new User({})
          const data = await user.DetectionCookie()
  ctx.body = {
    data
  }
    }else{
         ctx.body={
          data:{
              code:400,
          message:'key错误'
          }
      } 
    }
  

});
router.post('/api/getConfigWeb', body(), async (ctx) => {
      const body = ctx.request.body
  const key = body.key
  const value = body.value
  const keys=body.keys
    if (process.env.QUIET_KEY == keys) {

  editDependencies({ key: key, value: value, filepath: './config.json', type: 'quiet' })
  //  exec(`pm2 restart app.js`,(e,k,l)=>{})
  ctx.body = {
    data: {
      code: 200
    }
  }
    }else{
              ctx.body={
          data:{
              code:400,
          message:'key错误'
          }
      }
    }
});
router.post('/api/login', body(), async (ctx) => {
  const body = ctx.request.body
  const key = body.key
  if (process.env.QUIET_KEY == key) {
    ctx.body = {
      data: {
        code: 200,
        message: '登录成功'
      }
    }
    return
  }
  ctx.body = {
    data: {
      code: 400,
      message: '登录失败'
    }
  }
});
const editDependencies = function ({ key, value, filepath, type }) {
  // 读取文件
  const currFile = fs.readFileSync(filepath);
  console.log('读取成功！')
  const currFileObj = JSON.parse(currFile);

  const currType = type || 'quiet';
  if (currFileObj[currType]) currFileObj[currType][key] = value;
  else currFileObj[currType] = {}
  // 写入文件
  fs.writeFileSync(filepath, JSON.stringify(currFileObj));
  console.log('写入成功！')
}

const port = process.env.NINJA_PORT || 5701;
console.log('Start Ninja success! listening port: ' + port);
app.listen(port);

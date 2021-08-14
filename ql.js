'use strict';

const got = require('got');
require('dotenv').config();
const { readFile } = require('fs/promises');
const path = require('path');

// const qlDir = process.env.QL_DIR || '/QL';
const authFile = process.env.QL_DIR

const api = got.extend({
  prefixUrl: process.env.QL_URL || 'http://localhost:5700',
  retry: { limit: 0 },
});

async function getToken() {
  const authConfig = JSON.parse(await readFile(authFile));
  return authConfig.token;
}

module.exports.getEnvs = async (pin) => {
  const token = await getToken();
  const body = await api({
    url: 'api/envs',
    searchParams: {
      searchValue: pin,
      t: Date.now(),
    },
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).json();
  return body.data;
};
// 获取资产详细
module.exports.getAssets = async (pin) => {
  const token = await getToken();
  const body = await api({
    url: 'api/crons',
    searchParams: {
      searchValue: process.env.ASSETS,
      t: Date.now(),
    },
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).json();
  const id = body.data[1]._id;
  const Data = await api({
    url: 'api/crons/' + id + '/log',
    searchParams: {
      t: Date.now(),
    },
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).json();
  const arr = Data.data.split('********开始');
  return arr.filter(item => item.indexOf(pin) != -1)
};
module.exports.getAssetsM = async (pin) => {
  const token = await getToken();
  const body = await api({
    url: 'api/crons',
    searchParams: {
      searchValue: process.env.ASSETSM,
      t: Date.now(),
    },
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).json();
  const id = body.data[0]._id;
  const Data = await api({
    url: 'api/crons/' + id + '/log',
    searchParams: {
      t: Date.now(),
    },
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).json();
  const arr = Data.data.split('********开始');
  return arr.filter(item => item.indexOf(pin) != -1)
};
module.exports.getEnvsCount = async () => {
  const data = await this.getEnvs();
  return data.length;
};

module.exports.addEnv = async (cookie, remarks) => {
  const token = await getToken();
  const body = await api({
    method: 'post',
    url: 'api/envs',
    params: { t: Date.now() },
    json: {
      name: 'JD_COOKIE',
      value: cookie,
      remarks,
    },
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }).json();
  return body;
};

module.exports.updateEnv = async (cookie, eid, remarks) => {
  const token = await getToken();
  const body = await api({
    method: 'put',
    url: 'api/envs',
    params: { t: Date.now() },
    json: {
      name: 'JD_COOKIE',
      value: cookie,
      _id: eid,
      remarks,
    },
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }).json();
  return body;
};
module.exports.getUserList = async () => {
  const token = await getToken();
  const body = await api({
    url: 'api/crons',
    searchParams: {
      searchValue: process.env.ASSETSM,
      t: Date.now(),
    },
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
    },
  }).json();
}

module.exports.delEnv = async (eid) => {
  const token = await getToken();
  const body = await api({
    method: 'delete',
    url: 'api/envs',
    params: { t: Date.now() },
    body: JSON.stringify([eid]),
    headers: {
      Accept: 'application/json',
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json;charset=UTF-8',
    },
  }).json();
  return body;
};

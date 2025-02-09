export const styleFetchStatus = {
  NO_FETCH: 1,
  FETCHED: 2,
};

/** api 服务模块的相关常量 */
export const apiSrvConst = {
  USER_KEY: 'HelUserRtxName',
  GET_APP_AND_VER: 'getSubAppAndItsVersion',
  GET_APP_AND_FULL_VER: 'getSubAppAndItsFullVersion',
  BATCH_GET_APP_AND_VER: 'batchGetSubAppAndItsVersion',
  BATCH_GET_APP_AND_FULL_VER: 'batchGetSubAppAndItsFullVersion',
  GET_APP_VER: 'getSubAppVersion',
  GET_APP_FULL_VER: 'getSubAppFullVersion',
  API_PATH_PREFIX: '/openapi/v1/app/info',
} as const;

export const PLAT_HEL = 'hel';

export const PLAT_UNPKG = 'unpkg';

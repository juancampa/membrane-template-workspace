const QUERY = '{ status headers body }';

export const Root = {
  get: ({ args }) => M.nodes.sys_http.get({ ...args }).$query(QUERY),
  post: ({ args }) => M.nodes.sys_http.post({ ...args }).$invoke(),
  put: ({ args }) => M.nodes.sys_http.put({ ...args }).$invoke(),
  patch: ({ args }) => M.nodes.sys_http.patch({ ...args }).$invoke(),
  'delete': ({ args }) => M.nodes.sys_http.delete({ ...args }).$invoke(),
}

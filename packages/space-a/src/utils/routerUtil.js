exports.createRouter = createRouter;
exports.createDefend = createDefend;
exports.renderRoute = renderRoute;

var paths, Default_Page, Error_Page;
var routerDefend = {};

function createRouter(_paths, _default, _error) {
  if (!_paths || _paths.length === 0) {
    throw new Error("no paths");
  }

  paths = _paths;
  _default && (Default_Page = _default);
  _error && (Error_Page = _error);
}

function createDefend(path, handler) {
  if (!path) {
    throw new Error("no paths of route defend");
  }

  if (!handler) {
    throw new Error("excepted a handler of route defend");
  }

  let bol = false;
  for (let i in routerDefend) {
    if (i === path) {
      bol = true;
    }
    break;
  }

  if (bol) {
    throw new Error("repeated handler of a path in route defend");
  }

  routerDefend[path] = { handler };
}

function renderRoute(pathname) {
  if (!paths) {
    return null;
  }

  if (!pathname || pathname === "/") {
    return Default_Page;
  }

  for (let i in paths) {
    if (pathname.indexOf(paths[i].path) !== -1) {
      return handleRouteDefend(paths[i].path, paths[i].component);
    }
  }

  return Error_Page || null;
}

function handleRouteDefend(path, component) {
  if (!routerDefend[path]) {
    return component;
  }

  return routerDefend[path].handler();
}

exports.createRouter = createRouter;
exports.createDefend = createDefend;
exports.renderRoute = renderRoute;
exports.renderPageRoute = renderPageRoute;

var paths, Default_Module, Error_Module;
var defend = {};

var curPath, nextPath;

function createRouter(_paths, _default, _error) {
  if (!_paths || _paths.length === 0) {
    throw new Error("no paths");
  }

  paths = _paths;
  _default && (Default_Module = _default);
  _error && (Error_Module = _error);
}

function createDefend(handler) {
  if (typeof handler !== "object" || Array.isArray(handler)) {
    throw new Error("pageDefend is not Object");
  }

  defend = handler;
}

function renderRoute(pathname) {
  if (!paths) {
    return null;
  }

  curPath = nextPath;
  nextPath = pathname;

  if (!pathname || pathname === "/") {
    return Default_Module || null;
  }

  for (let i in paths) {
    if (pathname.indexOf(paths[i].path) !== -1) {
      return handleRouteDefend(paths[i].path, paths[i].component);
    }
  }

  return Error_Module || null;
}

function handleRouteDefend(path, component) {
  if (!defend[path]) {
    return component;
  }

  const showModule = defend[path];
  return showModule.call(this, curPath, nextPath);
}

function renderPageRoute(paths, _default, _error, handler) {
  if (!paths) {
    throw new Error("no page paths");
  }

  if (!nextPath || nextPath === "/") {
    return _default || null;
  }

  for (let i in paths) {
    if (nextPath.indexOf(paths[i].path) !== -1) {
      if (handler && handler[paths[i].path]) {
        const defendHandler = handler[paths[i].path];
        return defendHandler.call(this, curPath, nextPath);
      }
      return paths[i].component;
    }
  }

  return _error || null;
}

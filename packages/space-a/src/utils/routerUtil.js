/* exports.createRouter = createRouter;
exports.createDefend = createDefend;
exports.renderRoute = renderRoute;
exports.renderPageRoute = renderPageRoute; */

import React from "react";
import { Route } from "react-router";

var paths, Default_Module, Error_Module;
var defend = {};

var curPath, nextPath;

function createRouter(_paths) {
  if (!_paths || _paths.length === 0) {
    throw new Error("no paths");
  }

  if (_paths[0].path === "/") {
    Default_Module = _paths.shift().component;
  }

  if (!_paths[_paths.length - 1].path) {
    Error_Module = _paths.pop().component;
  }

  paths = _paths;
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
    return Default_Module ? <Route component={Default_Module} /> : null;
  }

  for (let i in paths) {
    if (pathname.indexOf(paths[i].path) !== -1) {
      return handleRouteDefend(paths[i].path, paths[i].component);
    }
  }

  return Error_Module ? <Route component={Error_Module} /> : null;
}

function handleRouteDefend(path, component) {
  if (!defend[path]) {
    return <Route path={path} component={component} />;
  }

  const showModule = defend[path];
  return showModule.call(this, curPath, nextPath);
}

function renderPageRoute(_paths, handler) {
  if (!_paths) {
    throw new Error("no page paths");
  }

  var Default_Page, Error_Page;
  if (_paths[0].path === "/") {
    Default_Page = _paths.shift().component;
  }
  if (!_paths[_paths.length - 1].path) {
    Error_Page = _paths.pop().component;
  }

  if (!nextPath || nextPath === "/") {
    return Default_Page ? <Route component={Default_Page} /> : null;
  }

  for (let item of _paths) {
    if (nextPath.indexOf(item.path) !== -1) {
      if (handler && handler[item.path]) {
        const defendHandler = handler[item.path];
        return defendHandler.call(this, curPath, nextPath);
      }
      return <Route component={item.component} />;
    }
  }

  return Error_Page ? <Route component={Error_Page} /> : null;
}

export { createRouter, createDefend, renderRoute, renderPageRoute };

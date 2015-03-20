'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');
var url = require('url'); // https://www.npmjs.org/package/url
var proxy = require('proxy-middleware'); // https://www.npmjs.org/package/proxy-middleware
var util = require('util');
var modRewrite = require('connect-modrewrite');
var middleware = require('./proxy');

module.exports = function (options) {

    function browserSyncInit(baseDir, browser) {
        browser = browser === undefined ? 'default' : browser;

        var routes = null;
        if (baseDir === options.src || (util.isArray(baseDir) && baseDir.indexOf(options.src) !== -1)) {
            routes = {
                '/bower_components': 'bower_components'
            };
        }

        var server = {
            baseDir: baseDir,
            routes: routes
        };

        var proxyOptions = url.parse('http://10.42.3.58:9000/api');
        proxyOptions.route = '/api';

        server.middleware = [proxy(proxyOptions),
     modRewrite([
          '!\\.\\w+$ /index.html [L]'
        ])];

        browserSync.instance = browserSync.init({
            startPath: '/',
            server: server,
            browser: browser
        });
    }

    browserSync.use(browserSyncSpa({
        selector: '[ng-app]' // Only needed for angular apps
    }));

    gulp.task('serve', ['watch'], function () {
        browserSyncInit([options.tmp + '/serve', options.src]);
    });

    gulp.task('serve:dist', ['build'], function () {
        browserSyncInit(options.dist);
    });

    gulp.task('serve:e2e', ['inject'], function () {
        browserSyncInit([options.tmp + '/serve', options.src], []);
    });

    gulp.task('serve:e2e-dist', ['build'], function () {
        browserSyncInit(options.dist, []);
    });
};
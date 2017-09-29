/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fastbootTransform = require('fastboot-transform');

const BOOTSTRAP_LIBRARIES = [
  // 'alert',
  // 'button',
  'carousel',
  'collapse',
  // 'dropdown',
  'modal',
  // 'popover',
  // 'scrollspy',
  // 'tab',
  // 'tooltip',
  'util'
];

module.exports = {
    name: 'bootstrap',

    isDevelopingAddon() {
        return true;
    },

    // taken from: https://ember-fastboot.com/docs/addon-author-guide#third-party-dependencies

    included(app) {
        BOOTSTRAP_LIBRARIES.forEach((library) => {
            app.import(`vendor/bootstrap/${library}.js`);
        });
    },

    treeForVendor(tree) {
        let libraryTree = fastbootTransform(new Funnel('bower_components/bootstrap/js/dist/', {
            files: BOOTSTRAP_LIBRARIES.map((library) => { return `${library}.js` }),
            destDir: 'bootstrap'
        }));
        return tree ? mergeTrees([tree, libraryTree]) : libraryTree;
    }
};

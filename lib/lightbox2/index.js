/* eslint-env node */
'use strict';

var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fastbootTransform = require('fastboot-transform');

module.exports = {
    name: 'lightbox2',

    isDevelopingAddon() {
        return true;
    },

    // taken from: https://ember-fastboot.com/docs/addon-author-guide#third-party-dependencies

    included(app) {
        app.import('vendor/lightbox2/lightbox.min.js');
    },

    treeForVendor(tree) {
        let libraryTree = fastbootTransform(new Funnel('bower_components/lightbox2/dist/js/', {
            files: ['lightbox.min.js'],
            destDir: 'lightbox2'
        }));
        return tree ? mergeTrees([tree, libraryTree]) : libraryTree;
    }
};

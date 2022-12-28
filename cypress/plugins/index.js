/// <reference types="cypress"/>

const allureWriter = require('@shelex/cypress-allure-plugin/writer');
const {
    addMatchImageSnapshotPlugin,
} = require('cypress-image-snapshot/plugin')

module.exports = (on, config) => {
    addMatchImageSnapshotPlugin(on, config);
    allureWriter(on, config);
    return config;
};
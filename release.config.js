/*jshint esversion: 9 */
let shared_config = require('@wma/semantic-release-shareable-config-base-release');
let shared_functions = require('@wma/semantic-release-shareable-config-base-release/base_functions');
let config = {
    ...shared_config,
    ...{
        branches: [
            'ctek-main',
            {
                name: 'ctek-development',
                prerelease: true
            }
        ]
    },
};

module.exports = shared_functions.prepareForRelease(config, process.env.CI_COMMIT_BRANCH);
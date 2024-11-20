import { AWS } from '@serverless/typescript';

const serverlessConfiguration: AWS = {
  service: 'serverless-direct-avenue',
  frameworkVersion: '3',
  provider: {
    name: 'aws',
    runtime: 'nodejs18.x',
  },
  functions: {
    main: {
      handler: 'src/main.handler',
      events: [
        {
          http: {
            path: '/',
            method: 'ANY',
          },
        },
        {
          http: {
            path: '{proxy+}',
            method: 'ANY',
          },
        },
      ],
    },
  },
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    'serverless-offline': {
      reloadHandler: true,
      useChildProcesses: true,
      noPrependStageInUrl: true,
    },
  },
  plugins: ['serverless-offline', 'serverless-webpack'],
};

module.exports = serverlessConfiguration;

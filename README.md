# CDK TypeScript Hello World Lambda

This project demonstrates a Hello World AWS Lambda function written in TypeScript and deployed using the AWS Typescript CDK.The Lambda function returns a JSON response with a greeting and the current time when triggered via an API Gateway endpoint.

- [CDK TypeScript Hello World Lambda](#cdk-typescript-hello-world-lambda)
    - [Project Structure](#project-structure)
  - [Prerequisites](#prerequisites)
  - [Setup and Installation](#setup-and-installation)
    - [1. Transpile TypeScript to JavaScript](#1-transpile-typescript-to-javascript)
    - [2. Deploy to AWS](#2-deploy-to-aws)
    - [3. Access the API Gateway Endpoint](#3-access-the-api-gateway-endpoint)
  - [Cleaning Up](#cleaning-up)
  - [Conclusion](#conclusion)
  - [Useful commands](#useful-commands)


### Project Structure

```
├── src/
│   └── index.ts              # Main Lambda function code (TypeScript)
├── dist/                     # Created during transpile
│   └── lambda/
│       └── index.js          # Transpiled JavaScript for Lambda
├── cdk-typescript-hello-world-lambda-stack.ts   # CDK Stack definition
├── tsconfig.json             # TypeScript configuration
├── package.json              # Node.js dependencies
└── README.md                 # This file
```


## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [AWS CLI](https://aws.amazon.com/cli/) configured with appropriate credentials
- [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html) installed (`npm install -g aws-cdk`)
- Git installed

## Setup and Installation

This is a sufficiently simple example that there are no external dependencies.

### 1. Transpile TypeScript to JavaScript

To compile the TypeScript Lambda function to JavaScript, run the following command:

```bash
tsc
```

This will transpile the TypeScript files into json in the `dist/lambda` folder.

### 2. Deploy to AWS

Once the code is transpiled and ready, deploy the Lambda function using AWS CDK:

```bash
cdk deploy
```

This command will:
1. Package the transpiled JavaScript and any dependencies in the `dist/lambda` directory.
2. Deploy the Lambda function and create an API Gateway endpoint.

### 3. Access the API Gateway Endpoint

After the deployment, the CDK will output the URL of the API Gateway endpoint. You can invoke the Lambda function by visiting the URL in your browser or making an HTTP request using `curl` or Postman.

For example:

```bash
curl https://<api-gateway-url>/prod/
```

## Cleaning Up

To delete the AWS resources created by the CDK stack, run:

```bash
cdk destroy
```

This will remove the Lambda function, API Gateway, and all associated resources from your AWS account.

## Conclusion

This project demonstrates how to:
- Write a simple AWS Lambda function in TypeScript.
- Transpile the TypeScript code to JavaScript for AWS Lambda.
- Deploy the Lambda function using AWS CDK, with an API Gateway endpoint.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

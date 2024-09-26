import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as path from 'path';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

const tags: { key: string; value: string }[] = JSON.parse('[{"key": "Name", "value": "cdk-demo"}, {"key": "environment", "value": "development"}]');

export class CdkTypescriptHelloWorldLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Apply the tags to the stack
    tags.forEach((tag: { key: string; value: string }) => {
      cdk.Tags.of(this).add(tag.key, tag.value);
    });

    // Lambda function creation
    const lambdaFunction = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_18_X,      // Use the latest stable Node.js runtime
      code: lambda.Code.fromAsset('dist/lambda/'),     // Reference the transpiled JS in 'dist'
      handler: 'index.handler',                // The handler points to 'dist/index.js'
    });

    // API Gateway setup for Lambda integration
    const endpoint = new apigateway.LambdaRestApi(this, 'Endpoint', {
      handler: lambdaFunction,
      restApiName: 'HelloService',
    });

    // Output the API endpoint URL
    new cdk.CfnOutput(this, 'HelloEndPoint', {
      value: endpoint.url || 'Something went wrong with the deploy',
    });
  }
}

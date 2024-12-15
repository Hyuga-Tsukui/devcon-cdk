import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_lambda } from 'aws-cdk-lib';
import { PythonFunction } from '@aws-cdk/aws-lambda-python-alpha';

export class AwsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new PythonFunction(this, 'helloFunction', {
      functionName: 'helloFunction',
      runtime: aws_lambda.Runtime.PYTHON_3_12,
      entry: 'lambda/hello',
      handler: 'lambda_handler',
    });
  }
}

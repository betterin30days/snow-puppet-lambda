# Snow Puppet Lambda

An AWS Lambda function to gather current snow conditions from local mountains.

## Example Output
```javascript
[ { name: 'Killington',
    runs: '124 of 155',
    lifts: '12 of 21',
    acres: '544ac of 1509ac' },
  { name: 'Hunter',
    runs: '32 of 67',
    lifts: '8 of 13',
    acres: '118ac of 320ac' },
  { name: 'Camelback',
    runs: '19 of 37',
    lifts: '5 of 16',
    acres: 'N/A of 166ac' } ]
```

## Deploying
```
$ npm run package
```
Upload the zip to AWS Lambda

## Local
```
$ npm run local
```

## Stack
- AWS Lambda
- Google Puppeteer
- [Template for puppeteer built in lambda](https://github.com/sambaiz/puppeteer-lambda-starter-kit)

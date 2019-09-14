# Publicly-Listed AWS Accounts
This is a communal list of any AWS Account IDs owned by anyone that are available publicly on the internet. Pull Requests encouraged!

## Usage
### JSON File
The source-of-truth is [`accounts.json`](https://raw.githubusercontent.com/rupertbg/aws-public-account-ids/master/accounts.json). If you have any additions to make please put them here.
#### Schema
```json
{
  "id": "123456789012",
  "owner": "e.g. name of company",
  "description": "Short description of the known purpose of the account",
  "source": "URL to the public listing of the account"
}
```
### Data Viewer
A basic data view is generated from the JSON file and is available on [Github Pages](https://rupertbg.github.io/aws-public-account-ids/dist/index.html)

## Build
Run `npm i && npm run` to get `dist` up-to-date with any changes.

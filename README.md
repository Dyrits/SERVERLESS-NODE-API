# SERVERLESS-NODE-API

A Node.js Express API running on AWS Lambda, deployed with the Serverless Framework.

## About The Project

A single Lambda function, `api`, handles all incoming requests through an `httpApi` event; Express.js routes and handles the requests internally, with `serverless-http` transforming the event payloads. Data access uses Drizzle ORM with a Neon serverless Postgres database.

### Built With

- Node.js + Express
- Serverless Framework (AWS Lambda, httpApi)
- serverless-http
- Drizzle ORM + Neon (serverless Postgres)

## Getting Started

### Prerequisites

- Node.js
- AWS credentials configured for the Serverless Framework

### Installation and usage

```sh
npm install
npm run offline    # local development (serverless offline, development stage)
npm run deploy     # deploy to production stage, eu-central-1
```

## License

No license file is present in this repository.

## Contact

Dyrits - https://github.com/Dyrits

# Resource Sharing System

## Code submission

### 📚 Context

#### Things need to consider to run application
1. 💡 I've used .env file to use database connection string
```
DATABASE_URL="postgres://user:password@localhost:5432/resource_sharing"
```
2. I've added some pre-seed data, to have this data:
```
npx prisma seed
```
would do the trick.


### ⏳ Time Constraints and Trade-offs

Given the limited time available, I had to make several trade-offs in the implementation. While some features were left out, I focused on clearly articulating my thought process and design decisions.

##### ✅ What I Focused On
1.	Clear Documentation for Senior-Level Evaluation
  I invested time in writing detailed explanations in the `Problem Modelling`](/docs/problem-modelling.md) and `Architectural Decision Record` documents. As a candidate for a Senior Engineer role, I believe demonstrating strong documentation and architectural reasoning is just as important as code. 
  
  > Please visit ADRs directory
  
2.	Structured Problem Modelling using BDD/TDD Techniques
  In [`Problem Modelling`](/docs/problem-modelling.md), I used Gherkin syntax from Behavior-Driven Development (BDD) to define use cases and edge cases. This allowed me to approach the problem from a test-first mindset and outline system behavior systematically.


#### ⚠️ What I Deprioritized
1.	Unit Tests
I chose to skip writing unit tests due to time constraints. In my experience, unit tests often fail to catch meaningful bugs in complex access control logic—these typically surface during acceptance or integration testing.

2.	Group Grant Access Endpoint
  I didn’t implement the endpoint responsible for granting a group access to resources. This is a crucial piece since the bipartite graph logic requires creating edges between all group members and the target resources. However, I discussed the design for this in detail in the Problem Modelling document.
3.	Group Revoke Access Endpoint
  Similarly, I left out the revoke access logic for groups, but again, the rationale and expected behavior are documented in Problem Modelling.
4.	GET /resources/with-user-count Endpoint
  This was deprioritized due to time constraints. I intended to implement a precomputed approach for this as well, but did not have time to do so.


#### 🚀 Future Improvements
1.	Acceptance Tests Based on Gherkin Scenarios
  Since the acceptance criteria are already defined in Gherkin format, a logical next step would be to implement end-to-end acceptance tests for core flows like:
	•	Adding a user
	•	Granting direct access
	•	Adding users to groups
	•	Group-based access propagation
2.	Implement Grant/Revoke Logic for Groups
    Completing the logic for group access control would provide full coverage for the bipartite access graph and ensure consistency in access propagation and revocation.
3.	Database Profiling and Optimization
    It would be beneficial to run query profiling and indexing analysis on key access queries to ensure they scale efficiently. This could be especially important for high-volume user-resource relationships.

#### Things what I did

1. I've tried to explain my thought process as much as possible in `Problem Modelling` and `Architectural Decision Record` since I am `a candidate for Senior Engineer` role, it would make much more sense to show a skill of documentation
2. In [`Problem Modelling`](../docs//problem-modelling.md), I've used `Gherkin` syntax from `Behavior Driven Development` to state all the cases and tried to identify edge cases using TDD, BDD techniques

#### Things what I have ignored

1. Unit tests are ignored which could be time consuming and even meaningless I've seen most of the bugs or edge cases 
   didn't detected in unit tests but later discovered acceptance tests
2. Group grant access endpoint were not specified which seemed crucial to me since Bipartite Graph logic
   involves adding all edges for group users. But I've explained this in [`Problem Modelling`](../docs//problem-modelling.md)
3. Group provoke access endpoint were also not specified but seemed important. Also explained in [`Problem Modelling`](../docs//problem-modelling.md)
4. `GET /resources/with-user-count` is ignored because I've also wanted to have a precomputed approach and run out of time. 

#### Future Improvements

1. Since I already have `Gherkin style` acceptance criterias in problem modelling, it would be nice to write `Acceptance tests` to actually adding user, granting access, adding to group (and so on)
2. Since I've ignored grant/provoke access logic due time constraint, it would be nice to implement to have full logic
3. It would have been nice to add some query profiler analysis to further improve database indexing


<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

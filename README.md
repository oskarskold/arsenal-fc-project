This is a Next 13 + Sanity starter repo.

## Prerequisites

- Git
- Node
- Sanity CLI: https://www.sanity.io/docs/cli?slug=getting-started-with-sanity-cli

## Getting Started

1. Clone starter project and rename it "some-project-name" and remove hidden folder .git
2. Create a new totally separate Sanity project via the cli by running `sanity init`
3. Delete the local Sanity project that was just created, all the sanity files you need are already in your "some-project-name" project
4. Go to [sanity.io](http://sanity.io/) and copy the newly created `projectId` into the env file of your "some-project-name"
5. Start development on your new project

To run the development server:

```bash
yarn dev
```

After that the starter will be available on http://localhost:3000,
to reach the Sanity admin go to http://localhost:3000/admin and try to login with the sanity account (you will need an invtie to a Sanity project).

All test env variables are present in the env.local.example

## Contribute to the starter

We would like to collect feedback on how the starter has helped, what you think of it, etc. while working on your respective new Sanity projects.
Send feedback to mark.tierney@umain.com, alexander.eneroth@umain.com and emil.berg@umain.com.

If you have any suggestions then submit PR’s with any improvements you can think of.

### Verfying changes

Deployments of each branch can be found here: https://vercel.com/umain-projects/umain-sanity-starter-project-frontend-and-cms

The dataset used in the deployment can be found under the Umain sanity organisation: https://www.sanity.io/organizations/oESOrYPzn/project/s519qnsi

If you need access, request from mark.tierney@umain.com alexaner.eneroth@uamin.com

# svelte-graphql-demo

This is a simple application that demonstrates the use of the urql GraphQL client along with code generation for TypeScript.
Set PUBLIC_GRAPH_URL to get started. You can edit the query in `src/routes/+page.ts`, after which you can do `npm run codegen`.
With that, all the types should be automatically validated in two ways: The query is correct based on the schema, and the results
are accessed correctly in the frontend code. You can build your query in the GraphiQL frontend, which is also included in this project.

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import yml from 'yaml';
import { writeFileSync } from 'fs';
dotenv.config();

if (!process.env.PUBLIC_GRAPH_ENDPOINT?.length)
	throw new Error('PUBLIC_GRAPH_ENDPOINT not set in .env!');

/** @type {import('@graphql-codegen/cli').CodegenConfig} */
const config = {
	schema: process.env.PUBLIC_GRAPH_ENDPOINT,
	emitLegacyCommonJSImports: false,
	documents: ['src/**/*.ts', 'src/**/*.svelte'],
	generates: {
		'src/lib/gql/': {
			preset: 'client'
		}
	}
};

writeFileSync('codegen.yml', yml.stringify(config));
console.log('Written to codegen.yml!');
process.exit(0);

// codegen.js/ts won't work (https://github.com/dotansimha/graphql-code-generator/issues/8488)

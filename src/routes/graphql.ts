import { createClient, type TypedDocumentNode } from '@urql/core';
import { PUBLIC_GRAPH_ENDPOINT } from '$env/static/public';
import type { AnyVariables } from '@urql/core/dist/types/types';

const urql = createClient({
	url: PUBLIC_GRAPH_ENDPOINT
});

export const gquery = <Data = unknown, Variables extends AnyVariables = AnyVariables>(
	query: TypedDocumentNode<Data, Variables>,
	variables: Variables
) => urql.query(query, variables).toPromise();

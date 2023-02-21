import type { PageLoad } from './$types';
import { graphql } from '$lib/gql';
import { gquery } from './graphql';
import { error } from '@sveltejs/kit';

export const load: PageLoad = async () => {
	const COURSES_QUERY = graphql(`
		query me {
			courses {
				id
				name
				createdAt
				units {
					created_at
					name
					id
				}
			}
		}
	`);

	const response = await gquery(COURSES_QUERY, {});
	if (response.error || !response.data)
		throw error(501, response.error?.message ?? 'No data returned!');
	else {
		return {
			courses: response.data.courses
		};
	}
};

/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * Combined date and time (with time zone) in [RFC 3339][0] format.
   *
   * Represents a description of an exact instant on the time-line (such as the
   * instant that a user account was created).
   *
   * [`DateTime` scalar][1] compliant.
   *
   * See also [`chrono::DateTime`][2] for details.
   *
   * [0]: https://datatracker.ietf.org/doc/html/rfc3339#section-5
   * [1]: https://graphql-scalars.dev/docs/scalars/date-time
   * [2]: https://docs.rs/chrono/latest/chrono/struct.DateTime.html
   */
  DateTime: any;
  Uuid: any;
};

export type CitizenshipApplicationInput = {
  country_of_birth: Scalars['String'];
  country_of_citizenship: Array<Scalars['String']>;
  country_of_residence: Scalars['String'];
  date_of_birth: Scalars['DateTime'];
  ethnic_groups: Array<Scalars['String']>;
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  occupations: Array<Scalars['String']>;
  sex: Scalars['String'];
  skills: Array<Scalars['String']>;
};

export enum CitizenshipStatus {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type Course = {
  __typename?: 'Course';
  createdAt: Scalars['DateTime'];
  id: Scalars['Uuid'];
  name: Scalars['String'];
  slug: Scalars['String'];
  units: Array<Unit>;
};

export type CrackSeconds = {
  __typename?: 'CrackSeconds';
  guesses: Scalars['Float'];
  seconds: Scalars['Float'];
  string: Scalars['String'];
};

export type CreateCourseInput = {
  name: Scalars['String'];
};

export type CreateUserInput = {
  calling_code: Scalars['String'];
  country_code: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  password: Scalars['String'];
  phone_number: Scalars['String'];
  referrer?: InputMaybe<Scalars['String']>;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  create_citizenship_application: Scalars['Uuid'];
  create_course: Course;
  create_light_university_checkout_session: Scalars['String'];
  create_user: Scalars['Uuid'];
  /** Returns a JWT token for the user */
  login: Scalars['String'];
  test: Scalars['String'];
};


export type MutationCreate_Citizenship_ApplicationArgs = {
  citizenship_application: CitizenshipApplicationInput;
};


export type MutationCreate_CourseArgs = {
  course: CreateCourseInput;
};


export type MutationCreate_Light_University_Checkout_SessionArgs = {
  success_url: Scalars['String'];
};


export type MutationCreate_UserArgs = {
  create_user_input: CreateUserInput;
};


export type MutationLoginArgs = {
  login_user: LoginUserInput;
};

export type Query = {
  __typename?: 'Query';
  course_by_slug?: Maybe<Course>;
  courses: Array<Course>;
  /**
   * Returns the crack time of a password
   * Used for password strength estimation
   * On the frontend
   */
  crack_time: CrackSeconds;
  me?: Maybe<User>;
  unit_by_slug?: Maybe<Unit>;
  user_count: Scalars['Int'];
};


export type QueryCourse_By_SlugArgs = {
  slug: Scalars['String'];
};


export type QueryCrack_TimeArgs = {
  password: Scalars['String'];
};


export type QueryUnit_By_SlugArgs = {
  slug: Scalars['String'];
};

export type Unit = {
  __typename?: 'Unit';
  course_id: Scalars['Uuid'];
  created_at: Scalars['DateTime'];
  id: Scalars['Uuid'];
  name: Scalars['String'];
  notion_page_id?: Maybe<Scalars['String']>;
  parent_unit?: Maybe<Scalars['Uuid']>;
  slug: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  citizenship_status?: Maybe<CitizenshipStatus>;
  customer_portal_url: Scalars['String'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Uuid'];
  last_name: Scalars['String'];
  referral_count: Scalars['Int'];
  roles: Array<Scalars['String']>;
};


export type UserCustomer_Portal_UrlArgs = {
  return_url?: InputMaybe<Scalars['String']>;
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', courses: Array<{ __typename?: 'Course', id: any, name: string, createdAt: any, units: Array<{ __typename?: 'Unit', created_at: any, name: string, id: any }> }> };


export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"courses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"units"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
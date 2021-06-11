export type Maybe<T> = T | null;
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
  Date: string;
  DateTime: string;
  JSON: Record<string, unknown>;
  JSONObject: Record<string, unknown>;
  Time: string;
};

export type CreateThemeInput = {
  userId?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
  description: Scalars['JSON'];
  startingAt?: Maybe<Scalars['DateTime']>;
  endingAt?: Maybe<Scalars['DateTime']>;
  dailyPrompts?: Maybe<Array<Maybe<Scalars['String']>>>;
  dailyTracking?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CreateUserInput = {
  netlifyID: Scalars['String'];
  stripeID: Scalars['String'];
};





export type Mutation = {
  __typename?: 'Mutation';
  createTheme?: Maybe<Theme>;
  createUser?: Maybe<User>;
};


export type MutationCreateThemeArgs = {
  input: CreateThemeInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};

export type Query = {
  __typename?: 'Query';
  getStripeSession: StripeSession;
  getUserByNetlifyID: User;
  getUserByStripeID: User;
  redwood?: Maybe<Redwood>;
  theme?: Maybe<Theme>;
  themes: Array<Theme>;
  users: Array<User>;
};


export type QueryGetUserByNetlifyIdArgs = {
  netlifyID: Scalars['String'];
};


export type QueryGetUserByStripeIdArgs = {
  stripeID: Scalars['String'];
};


export type QueryThemeArgs = {
  id: Scalars['String'];
};

export type Redwood = {
  __typename?: 'Redwood';
  version?: Maybe<Scalars['String']>;
  currentUser?: Maybe<Scalars['JSON']>;
  prismaVersion?: Maybe<Scalars['String']>;
};

export type StripeSession = {
  __typename?: 'StripeSession';
  link: Scalars['String'];
};

export type Theme = {
  __typename?: 'Theme';
  id: Scalars['String'];
  user: User;
  userId: Scalars['Int'];
  title: Scalars['String'];
  description: Scalars['JSON'];
  createdAt: Scalars['DateTime'];
  startingAt: Scalars['DateTime'];
  endingAt?: Maybe<Scalars['DateTime']>;
  dailyPrompts?: Maybe<Array<Maybe<Scalars['String']>>>;
  dailyTracking?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type UpdateThemeInput = {
  userId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['JSON']>;
  startingAt?: Maybe<Scalars['DateTime']>;
  endingAt?: Maybe<Scalars['DateTime']>;
  dailyPrompts?: Maybe<Array<Maybe<Scalars['String']>>>;
  dailyTracking?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UpdateUserInput = {
  netlifyID?: Maybe<Scalars['String']>;
  stripeID?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  netlifyID: Scalars['String'];
  stripeID: Scalars['String'];
  createdAt: Scalars['DateTime'];
};

export type StripeSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type StripeSessionQuery = (
  { __typename?: 'Query' }
  & { stripeSession: (
    { __typename?: 'StripeSession' }
    & Pick<StripeSession, 'link'>
  ) }
);

export type ThemesQueryVariables = Exact<{ [key: string]: never; }>;


export type ThemesQuery = (
  { __typename?: 'Query' }
  & { themes: Array<(
    { __typename?: 'Theme' }
    & Pick<Theme, 'id' | 'title' | 'description' | 'createdAt'>
  )> }
);

export type CreateThemeMutationVariables = Exact<{
  input: CreateThemeInput;
}>;


export type CreateThemeMutation = (
  { __typename?: 'Mutation' }
  & { createTheme?: Maybe<(
    { __typename?: 'Theme' }
    & Pick<Theme, 'id'>
  )> }
);

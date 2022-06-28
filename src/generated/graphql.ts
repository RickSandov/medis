import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
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
};

export type Patient = {
  __typename?: 'Patient';
  name: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  getPatient: Patient;
};

export type GetPatientQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPatientQuery = { __typename?: 'Query', getPatient: { __typename?: 'Patient', name: string } };


export const GetPatientDocument = gql`
    query getPatient {
  getPatient {
    name
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getPatient(variables?: GetPatientQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPatientQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetPatientQuery>(GetPatientDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getPatient', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
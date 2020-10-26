import gql from 'graphql-tag';

export default gql`
    query repositoryOwner(
        $user: String!
        $first: Int
        $last: Int
        $before: String
        $after: String
    ) {
        repositoryOwner (
            login: $user
        ) {
            id
            repositories(
                first: $first
                last: $last
                before: $before
                after: $after
            ) {
                nodes {
                    name
                    shortDescriptionHTML
                    url
                    isFork
                    pullRequests {
                        totalCount
                    }
                    issues {
                        totalCount
                    }
                    commitComments (last: 1) {
                        nodes {
                            createdAt
                        }
                    }
                }
                pageInfo {
                    startCursor
                    endCursor
                    hasNextPage
                    hasPreviousPage
                }
            }
        }
    }
`;

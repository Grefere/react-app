export interface RepositoryResponse {
    repositoryOwner: RepositoryOwner;
}

export interface RepositoryOwner {
    repositories: RepositoryConnection;
}

export interface RepositoryConnection {
    nodes?: Array<Repository>;
    pageInfo: PageInfo;
}

export interface Repository {
    name: string;
    shortDescriptionHTML: string;
    url: string;
    isFork: boolean;
    issues: IssueConnection;
    pullRequests: PullRequestConnection;
    commitComments: Array<CommitCommentConnection>;
}

export interface IssueConnection {
    totalCount: number;
}

export interface PullRequestConnection {
    totalCount: number;
}

export interface CommitCommentConnection {
    nodes: CommitComment;
}

export interface CommitComment {
    createdAt: string;
}

export interface PageInfo {
    endCursor: string;
    startCursor: string;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export enum SearchMode {
    BEFORE = 'before',
    AFTER = 'after'
}

import React, {FC} from 'react';
import classes from './results.css';
import {Repository} from '@models/repository';

export interface Props {
    repositories: Array<Repository>;
    loading: boolean;
}

const Results: FC<Props> = (props) => {
    const {repositories} = props;

    return (
        <div className={classes.root}>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>{'Name'}</th>
                        <th>{'Short description'}</th>
                        <th>{'Is it a fork?'}</th>
                        <th>{'Last commit date'}</th>
                        <th>{'Issue count'}</th>
                        <th>{'Pull-request count'}</th>
                    </tr>
                </thead>

                <tbody>
                    {repositories.map((repository, index) => (
                        <tr key={`repository-${index}`}>
                            <td className={classes.name}>
                                <a href={repository.url} target={'_blank'} rel={'noreferrer'}>
                                    <span>{repository.name}</span>
                                </a>
                            </td>

                            <td className={classes.description}>
                                <div dangerouslySetInnerHTML={{
                                    __html: repository.shortDescriptionHTML
                                }} />
                            </td>

                            <td className={classes.isFork}>{repository.isFork ? 'Yes' : 'No'}</td>

                            <td className={classes.date}>
                                {repository.commitComments.length ? (
                                    repository.commitComments[0].nodes.createdAt
                                ) : (
                                    <span>-</span>
                                )}
                            </td>

                            <td className={classes.issues}>{repository.issues.totalCount}</td>
                            <td className={classes.pullRequests}>{repository.pullRequests.totalCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Results;

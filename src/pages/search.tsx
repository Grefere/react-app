import React, {Fragment} from 'react';
import {useSearch} from '@talons/useSearch';
import Form from '@components/form';
import Pagination from '@components/pagination';
import Results from '@components/results';
import classes from './search.css';

const Search = () => {
    const {
        currentSearch,
        handleSubmit,
        loading,
        owner
    } = useSearch();

    return (
        <div className={classes.root}>
            <Form
                handleSubmit={handleSubmit}
                loading={loading}
            />

            {!!currentSearch && !owner && !loading && (
                <div className={classes.error}>
                    <strong>{'No users found with this username.'}</strong>
                </div>
            )}

            {owner && !owner.repositories.nodes?.length && !loading && (
                <div className={classes.error}>
                    <strong>{'This user does not have any repositories.'}</strong>
                </div>
            )}

            {!!owner && !!owner.repositories.nodes?.length && (
                <Fragment>
                    {Array.isArray(owner.repositories.nodes) && (
                        <Results
                            repositories={owner.repositories.nodes}
                            loading={loading}
                        />
                    )}

                    <Pagination
                        pageInfo={owner.repositories.pageInfo}
                        loading={loading}
                    />
                </Fragment>
            )}
        </div>
    );
};

export default Search;

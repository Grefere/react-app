import React, {FC} from 'react';
import classes from './pagination.css';
import {PageInfo} from '@models/repository';
import {usePagination} from '@talons/usePagination';

export interface Props {
    pageInfo: PageInfo;
    loading: boolean;
}

const Pagination: FC<Props> = (props) => {
    const {
        pageInfo,
        loading
    } = props;

    const {
        handleNextPage,
        handlePreviousPage
    } = usePagination({
        pageInfo
    });

    return (pageInfo.hasPreviousPage || pageInfo.hasNextPage) ? (
        <div className={classes.root}>
            {pageInfo.hasPreviousPage && (
                <button
                    type={'button'}
                    className={classes.prev}
                    disabled={loading}
                    onClick={handlePreviousPage}
                >
                    <span>{'Previous'}</span>
                </button>
            )}

            {pageInfo.hasNextPage && (
                <button
                    type={'button'}
                    className={classes.next}
                    disabled={loading}
                    onClick={handleNextPage}
                >
                    <span>{'Next'}</span>
                </button>
            )}
        </div>
    ) : null;
};

export default Pagination;

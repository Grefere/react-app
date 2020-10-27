import {useCallback} from 'react';
import {PageInfo, SearchMode} from '@models/repository';
import {useHistory, useLocation} from 'react-router-dom';

export interface Props {
    pageInfo: PageInfo;
}

export const usePagination = (props: Props) => {
    const {pageInfo} = props;
    const {search, pathname} = useLocation();
    const history = useHistory();

    const handlePreviousPage = useCallback(() => {
        const params = new URLSearchParams(search);

        params.set(SearchMode.BEFORE, pageInfo.startCursor);
        params.delete(SearchMode.AFTER);

        history.push({
            search: params.toString(),
            pathname
        });
    }, [search, pageInfo, history, pathname]);

    const handleNextPage = useCallback(() => {
        const params = new URLSearchParams(search);

        params.set(SearchMode.AFTER, pageInfo.endCursor);
        params.delete(SearchMode.BEFORE);

        history.push({
            search: params.toString(),
            pathname
        });
    }, [search, pageInfo, history, pathname]);

    return {
        handleNextPage,
        handlePreviousPage
    };
};

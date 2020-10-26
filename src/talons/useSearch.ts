import {useLocation, useHistory} from 'react-router-dom';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {useLazyQuery} from '@apollo/client';
import REPOSITORY_OWNER_QUERY from '../queries/repositoryOwner.gql';
import {SearchFormData} from '../models/form';
import {RepositoryOwner, RepositoryResponse, SearchMode} from '../models/repository';

const SHOW_PER_PAGE = 10;

export const useSearch = () => {
    const history = useHistory();
    const {search, pathname} = useLocation();
    const [runQuery, {data, error, loading}] = useLazyQuery<RepositoryResponse>(REPOSITORY_OWNER_QUERY);
    const [owner, setOwner] = useState<RepositoryOwner>();
    const params = useMemo(() => new URLSearchParams(search), [search]);

    const handleSubmit = useCallback((formData: SearchFormData) => {
        const user = formData.user || '';

        params.delete(SearchMode.BEFORE);
        params.delete(SearchMode.AFTER);
        params.set('user', user);

        history.push({
            search: params.toString(),
            pathname
        });
    }, [params, history, pathname]);

    useEffect(() => {
        data && setOwner(data.repositoryOwner);
    }, [data, setOwner]);

    useEffect(() => {
        const user = params.get('user');
        const after = params.get(SearchMode.AFTER);

        const before = !after
            ? params.get(SearchMode.BEFORE)
            : null;

        const first = after || !before
            ? SHOW_PER_PAGE
            : null;

        const last = before && !after
            ? SHOW_PER_PAGE
            : null;

        user && runQuery({
            variables: {
                user,
                first,
                last,
                before,
                after
            }
        });
    }, [params, runQuery]);

    useEffect(() => {
        const user = params.get('user');

        if (owner && !user) {
            setOwner(undefined);
        }
    }, [params, owner, setOwner]);

    return {
        currentSearch: params.get('user'),
        handleSubmit,
        loading,
        owner,
        error
    };
};

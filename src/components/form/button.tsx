import React, {FC, useEffect} from 'react';
import {useLocation} from 'react-router';
import {useFormApi} from 'informed';

export interface Props {
    loading: boolean;
}

const Button: FC<Props> = (props) => {
    const {setValue, getValue} = useFormApi();
    const {search} = useLocation();
    const {loading} = props;

    useEffect(() => {
        const params = new URLSearchParams(search);
        const user = params.get('user') || '';

        if (getValue('user') !== user) {
            setValue('user', user);
        }
    }, [getValue, search, setValue])

    return (
        <button
            type={'submit'}
            disabled={loading}
        >
            <span>{'Submit'}</span>
        </button>
    )
}

export default Button;

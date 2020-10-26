import React, {FC} from 'react';
import {Form as InformedForm, Text} from 'informed';
import {SearchFormData} from '../../models/form';
import classes from './form.scss';
import Button from './button';

export interface Props {
    handleSubmit: (formData: SearchFormData) => void;
    loading: boolean;
}

const Form: FC<Props> = (props) => {
    const {handleSubmit, loading} = props;

    return (
        <InformedForm
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <div className={classes.field}>
                <label htmlFor={'search-form-user'}>
                    <span>{'Username'}:</span>
                </label>

                <Text
                    className={classes.input}
                    id={'search-form-user'}
                    field={'user'}
                    disabled={loading}
                />
            </div>

            <Button
                loading={loading}
            />
        </InformedForm>
    );
};

export default Form;

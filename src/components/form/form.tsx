import React, {FC} from 'react';
import {Form as InformedForm, Text} from 'informed';
import {SearchFormData} from '@models/form';
import classes from './form.css';
import Button from './button';

export interface Props {
    handleSubmit: (formData: SearchFormData) => void;
    loading: boolean;
}

const Form: FC<Props> = (props) => {
    const {handleSubmit, loading} = props;

    return (
        <div className={classes.root}>
            <InformedForm
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <div className={classes.field}>
                    <label
                        htmlFor={'search-form-user'}
                        className={classes.label}
                    >
                        <span>{'Username'}:</span>
                    </label>

                    <Text
                        className={classes.input}
                        type={'text'}
                        id={'search-form-user'}
                        field={'user'}
                        disabled={loading}
                    />
                </div>

                <Button
                    loading={loading}
                />
            </InformedForm>
        </div>
    );
};

export default Form;

import React from 'react'
import style from './addForm.module.css'
import { Formik, Form, Field } from 'formik'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css'


const validateAddForm = (values: any) => {
    const errors = {};
    return errors;
};

type addFormPropsType = {
    addCommodity: (id: number, name: string,
                   priority: 1 | 2 | 3 | 4 | 5,
                   dateChange: string) => void
}

type addFormType = {
    addText: string
    addPriority: 1 | 2 | 3 | 4 | 5
}

const AddForm:React.FC<addFormPropsType> = ({addCommodity}) => {

    const submit = (values: addFormType) => {
        let id:number = Math.floor(Math.random() * Math.floor(1000000));

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let hour = today.getHours();
        let minute = today.getMinutes();
        let Now = dd + '/' + mm + '/' + yyyy + ' | ' + hour + ':' + minute;

        addCommodity(id, values.addText, values.addPriority, Now);
        values.addText='';
        values.addPriority=5
    };

    return (
        <div className={style.main}>
            <Formik
                initialValues={{ addText: '', addPriority: 5 }}
                validate={validateAddForm}
                onSubmit={submit}
            >
                {() => (
                    <Form className={style.formBlock}>
                        <div>
                            <p>Текст продукту</p>
                            <Field type="text" name="addText" className={style.addForm} />
                        </div>

                        <div>
                            <p>Пріоритет</p>
                            <Field name="addPriority" as="select" className={style.priority}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Field>
                        </div>
                        <Button type="submit" variant="primary">Додати</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
};

export default AddForm;

import React, { useContext } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';
import { Store } from '../App';


const ModalPage = ({ setOpenModal }: { setOpenModal: (arg: boolean) => void }) => {
  const [isSuccessOrder, setIsSuccessOrder] = useState<boolean>(false);
  const [store, setStore] = useContext(Store)!;

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(3)
      .label('Full Name')
      .required()
      .test('is-full-name', 'Please enter both your first and last name. First and last name must be at least 3 characters', (value): boolean => {
        if (typeof value === 'string') {
          const nameArr: string[] = value.split(" ");
          return nameArr.length > 1 && nameArr.length === nameArr.filter(word => word.length > 2).length;
        }
        return false;
      }),
    phoneNumber: Yup.string()
      .required("This field is Required")
      .matches(
        /^\+(?:[0-9]●?){8,21}[0-9]$/,
        "Phone number is not valid"
      ),
    address: Yup.string()
      .min(5)
      .label('address')
      .required()
      .test('is-address', 'at least three words, each at least 5 characters long', function (value) {
        if (typeof value === 'string') {
          const nameArr: string[] = value.split(" ");
          return nameArr.length > 2 && nameArr.length === nameArr.filter(word => word.length > 4).length;
        }
        return false;
      }),
    email: Yup.string().email('Invalid email').required('Required'),
  });

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {isSuccessOrder
          ? <div>Successfully ordered</div>
          : <>
            <div className="title">
              <h1>Personal details</h1>
            </div>
            <Formik
              initialValues={{
                name: '',
                phoneNumber: '',
                address: '',
                email: '',
              }}
              validationSchema={SignupSchema}
              onSubmit={() => {
                setIsSuccessOrder(true);
                setStore({
                  ...store,
                  products: [],
                });
              }}
            >
              {({ errors, touched }) => (
                <Form className='forma'>
                  <Field name="name" placeholder="Name" />
                  {errors.name && touched.name ? (
                    <div className='error'>{errors.name}</div>
                  ) : null}
                  <Field name="phoneNumber" placeholder="Phone number" />
                  {errors.phoneNumber && touched.phoneNumber ? (
                    <div className='error'>{errors.phoneNumber}</div>
                  ) : null}
                  <Field name="address" placeholder="Address" />
                  {errors.address && touched.address ? (
                    <div className='error'>{errors.address}</div>
                  ) : null}
                  <Field name="email" type="email" placeholder="E-mail" />
                  {errors.email && touched.email ? <div className='error'>{errors.email}</div> : null}
                  <Button type="submit">
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
            <div className="footer-modal">
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default ModalPage;
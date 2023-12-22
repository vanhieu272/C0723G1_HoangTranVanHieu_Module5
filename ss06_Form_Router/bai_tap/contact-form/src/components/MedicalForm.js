import {ErrorMessage, Field, Form, Formik, useFormik} from "formik";
import * as Yup from "yup";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MedicalForm() {
    const initialValue = {
        name: "",
        idCard: "",
        birthday: "",
        gender: null,
        nationality: "",
        workplace: "",
        jobPosition: "",
        insuranceCard: 1,
        province: "",
        district: "",
        commune: "",
        address: "",
        phoneNumber: "",
        email: ""
    };
    const validateObject = {
        name: Yup.string().required("Vui lòng nhập họ tên")
            .min(4, "Tên không được ít hơn 4 kí tự")
            .max(50, "Tên không quá 50 kí tự"),
        idCard: Yup.string().required("Vui lòng nhập CMND/CCCD")
            .min(9, "Không được ít hơn 5 kí tự")
            .max(12, "Không được lớn hơn 12 kí tự"),
        birthday: Yup.date()
            .required("Vui lòng nhập ngày sinh")
            .min(new Date('1900-01-01T00:00:00'), "Năm sinh phải lớn hơn 1900"),

        nationality: Yup.string().required("Vui lòng nhập quốc tịch"),
        province: Yup.string().required("Vui lòng nhập tỉnh thành"),
        district: Yup.string().required("Vui lòng nhập quận/huyện"),
        commune: Yup.string().required("Vui lòng nhập phường/xã"),
        address: Yup.string().required("Vui lòng nhập địa chỉ nhà"),
        phoneNumber: Yup.string()
            .required("Vui lòng nhập số điện thoại")
            .matches("(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})", "Số điện thoại không đúng định dạng"),
        email: Yup.string()
            .required("Vui lòng nhập email")
            .email("Email không hợp lệ")

    };

    const handleSubmit = (values) => {
        const data = `
            Tên: ${values.name}
            CMND: ${values.idCard}
            Năm sinh: ${values.birthday}
            Giới tính: ${values.gender === '1' ? 'Nam' : 'Nữ'}
            Quốc tịch: ${values.nationality}
            Nơi làm vệc: ${values.workplace}
            Bộ phận làm việc: ${values.jobPosition}
            BHYT: ${values.insuranceCard === '1' ? 'Có' : 'Không'}
            Tỉnh/Thành: ${values.province}
            Quận/Huyện: ${values.district}
            Phường/Xã: ${values.commune}
            Số nhà, tên đường: ${values.address}
            SĐT: ${values.phoneNumber}
            Email: ${values.email}
        `;
        const message = 'Thêm thành công !!'
        alert(data);
        toast.success(message);
        console.log(`${JSON.stringify(values)}`);
    };

    return( <>
        <div className="container justify-content-center p-5">
            <h2>Tờ khai Y tế</h2>
            <Formik
                initialValues={initialValue}
                onSubmit={handleSubmit}
                validationSchema={Yup.object(validateObject)}>
                <Form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Họ và Tên</label>
                        <Field type="text" className="form-control" name="name" id="name"/>
                        <ErrorMessage name="name" component="span" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="idCard" className="form-label">CMND</label>
                        <Field type="text" className="form-control" name="idCard" id="idCard"/>
                        <ErrorMessage name="idCard" component="span" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="birthday" className="form-label">Năm sinh</label>
                        <Field type="text" className="form-control" name="birthday" id="birthday"/>
                        <ErrorMessage name="birthday" component="span" className="text-danger"/>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Giới tính</label>
                        <div className="form-check">
                            <Field type="radio" name="gender" value="1" className="form-check-input" id="male" />
                            <label className="form-check-label" htmlFor="male">Nam</label>
                        </div>
                        <div className="form-check">
                            <Field type="radio" name="gender" value="0" className="form-check-input" id="female" />
                            <label className="form-check-label" htmlFor="female">Nữ</label>
                        </div>
                        <ErrorMessage name="gender" component="span" className="text-danger" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nationality" className="form-label">Quốc Tịch</label>
                        <Field type="text" className="form-control" name="nationality" id="nationality"/>
                        <ErrorMessage name="nationality" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="workplace" className="form-label">Công ty làm việc</label>
                        <Field type="text" className="form-control" name="workplace" id="workplace"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="jobPosition" className="form-label">Bộ phận làm việc</label>
                        <Field type="text" className="form-control" name="jobPosition" id="jobPosition"/>
                    </div>
                    <div className="mb-3 form-check">
                        <label className="form-check-label" htmlFor="insuranceCard">
                            Có thẻ bảo hiểm y tế
                        </label>
                        <input className="form-check-input" type="checkbox" value="1" id="insuranceCard"/>
                    </div>

                    <h3>Địa chỉ liên lạc tại Vệt Nam</h3>
                    <div className="mb-3">
                        <label htmlFor="province" className="form-label">Tỉnh thành</label>
                        <Field type="text" className="form-control" name="province" id="province"/>
                        <ErrorMessage name="province" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="district" className="form-label">Quận/Huyện</label>
                        <Field type="text" className="form-control" name="district" id="district"/>
                        <ErrorMessage name="district" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="commune" className="form-label">Phường/Xã</label>
                        <Field type="text" className="form-control" name="commune" id="commune"/>
                        <ErrorMessage name="commune" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Số nhà</label>
                        <Field type="text" className="form-control" name="address" id="address"/>
                        <ErrorMessage name="address" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Điện thoại</label>
                        <Field type="text" className="form-control" name="phoneNumber" id="phoneNumber"/>
                        <ErrorMessage name="phoneNumber" component="span" className="text-danger"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <Field type="email" className="form-control" name="email" id="email"/>
                        <ErrorMessage name="email" component="span" className="text-danger"/>
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-outline-dark">Lưu</button>
                    </div>
                </Form>
            </Formik>
        </div>
    </>);
}

export default MedicalForm;
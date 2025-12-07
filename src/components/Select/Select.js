import { FastField, ErrorMessage } from "formik";
import { Select } from "antd";
import TextErrors from "../TextErrors/TextErrors";

const Select1 = ({ label, name, options, placeholder, onClear, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <FastField name={name}>
        {({ field, form }) => (
          <Select
            allowClear
            onClear={onClear}
            // onClear={() => {
            //   // 👇 clear = "" cho khớp initialValues + Yup.string()
            //   form.setFieldValue(name, "");
            //   form.setFieldTouched(name, true, false); // kích hoạt hiển thị error
            //   // onClear && onClear();
            // }}
            // onClear={() => {
            //   form.setFieldValue(name, null); // để Yup bắt Required
            //   form.setFieldTouched(name, true, false); // để show error luôn
            // }}
            placeholder={placeholder || "Choose select"}
            id={name}
            {...rest}
            // 👇 nếu value === '' thì truyền undefined cho antd → hiện placeholder
            value={field.value || undefined}
            onChange={(value) => form.setFieldValue(name, value)} // cập nhật formik
            onBlur={() => form.setFieldTouched(name, true)} // để Formik validate
            style={{ width: "100%" }}
            options={options.map((opt) => ({
              label: opt.key,
              value: opt.value,
            }))}
          />
        )}
      </FastField>

      {/* Hiển thị lỗi nếu có */}
      <ErrorMessage name={name} component={TextErrors} />
    </div>
  );
};

export default Select1;
// import { ErrorMessage, FastField } from "formik";
// import TextErrors from "../TextErrors/TextErrors";
// const Select1 = (props) => {
//   const { label, options, name, ...rest } = props;
//   console.log(options);
//   return (
//     <div>
//       <div htmlFor={name}>{label}</div>
//       <FastField as="select" id={name} name={name} {...rest}>
//         {options.map((option, index) => {
//           return (
//             <option key={index} value={option.value}>
//               {option.key}
//             </option>
//           );
//         })}
//       </FastField>
//       <ErrorMessage component={TextErrors} name={name} />
//     </div>
//   );
// };
// export default Select1;

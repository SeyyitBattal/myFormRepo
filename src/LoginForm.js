// This js about forms
import React from "react";
import { useEffect, useState } from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormFeedback,
} from "reactstrap";
import * as Yup from "yup";

const roller = [
  { label: "Yönetici", value: "admin" },
  { label: "Yazar", value: "writer" },
  { label: "Okur", value: "reader" },
];

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: null,
    rememberMe: false,
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    role: "",
    option: "",
    rememberMe: "",
  });

  const [isFormValid, setFormValid] = useState(false);

  const formSchema = Yup.object().shape({
    email: Yup.string()
      .email("Bu olmaz ki")
      .required("Niçin mail girmiyorsun?"),
    password: Yup.string()
      .required("Password is Required")
      .min(6, "Passwords must be at least 6 characters long."),
    option: Yup.string().oneOf(["1", "2", "3"], "You must select one"),
    role: Yup.string().required("Bir role seçilmeli"),
    rememberMe: Yup.boolean(),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submit edildi ", loginData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });

    Yup.reach(formSchema, name)
      .validate(type === "checkbox" ? checked : value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });
  };

  useEffect(() => {
    console.log("Login çıktısı: ", loginData);
    formSchema.isValid(loginData).then((valid) => setFormValid(valid));
  }, [loginData]);

  useEffect(() => {
    console.log("Form Validation Error State Updated", formErrors);
  }, [formErrors]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="user-mail">Email</Label>
        <Input
          id="user-mail"
          type="email"
          name="email"
          value={loginData.email}
          invalid={!!formErrors.email}
          onChange={handleInputChange}
          placeholder="Emailnizi giriniz"
        />
        <FormFeedback>{formErrors.email}</FormFeedback>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="user-pass">Password</Label>
        <Input
          id="user-pass"
          type="password"
          name="password"
          value={loginData.password}
          invalid={!!formErrors.password}
          onChange={handleInputChange}
          placeholder="Şifrenizi giriniz"
        />
        <FormFeedback>{formErrors.password}</FormFeedback>
      </FormGroup>

      <FormGroup tag="fieldset" row>
        <legend className="col-form-label col-sm-2">
          Radio Buttons Options
        </legend>
        <Col sm={10}>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="option"
                value={1}
                onChange={handleInputChange}
              />{" "}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="radio"
                name="option"
                value={2}
                onChange={handleInputChange}
              />{" "}
              Option two can be something else and selecting it will deselect
              option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input
                type="radio"
                name="option"
                value={3}
                onChange={handleInputChange}
              />{" "}
              Option three is disabled
            </Label>
          </FormGroup>
        </Col>
      </FormGroup>

      <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input
          type="select"
          name="role"
          id="exampleSelect"
          onChange={handleInputChange}
          // invalid={!!formErrors.role} HATA VERİYOR
        >
          <option value="">Select your role...</option>
          {roller.map((rolItem, index) => {
            return (
              <option key={index} value={rolItem.value}>
                {rolItem.label}
              </option>
            );
          })}
        </Input>
        {/* <FormFeedback>{formErrors.role}</FormFeedback>  HATA VERİYOR*/}
      </FormGroup>

      <FormGroup>
        <Label htmlFor="remember-me">Beni Hatırla</Label>
        <Input
          id="remember-me"
          type="checkbox"
          name="rememberMe"
          checked={loginData.rememberMe}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Button
          type="submit"
          disabled={loginData.email === "" || loginData.password === ""}
        >
          Submit
        </Button>
      </FormGroup>
      <FormGroup>
        <Button type="button" disabled={!isFormValid}>
          Reset
        </Button>
      </FormGroup>
    </Form>
  );
};
export default LoginForm;

import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";

class FormSuper extends Component {
  handleChange = ({ currentTarget }) => {
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(currentTarget);

    if (errorMessage) errors[currentTarget.name] = errorMessage;
    else delete errors[currentTarget.name];

    const data = { ...this.state.data };
    data[currentTarget.name] = currentTarget.value;
    this.setState({ data: data, errors: errors });
  };

  validateProperty = (input) => {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    console.log(result);
    if (!result.error) return null;

    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });

    if (errors) return;

    this.doSubmit();
  };

  renderButton(label) {
    return <button className="btn btn-primary my-2">{label}</button>;
  }

  renderInput(name, label, type = "text") {
    return (
      <Input
        type={type}
        name={name}
        label={label}
        value={this.state.data[name]}
        onChange={this.handleChange}
        error={this.state.errors[name]}
      />
    );
  }

  renderSelect(name, label, options) {
    const { data } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={this.state.errors[name]}
      />
    );
  }
}

export default FormSuper;

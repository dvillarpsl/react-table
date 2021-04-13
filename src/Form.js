import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    name: "",
    nameError: "",
    lastName: "",
    lastNameError: "",
    email: "",
    emailError: "",
    code: "",
    codeError: "",
    showForm: true,
  };

  change = (e) => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      nameError: "",
      lastNameError: "",
      emailError: "",
      codeError: "",
    };

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Ingrese un email valido.";
    }

    this.setState({
      ...this.state,
      ...errors,
    });

    return isError;
  };

  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        name: "",
        nameError: "",
        lastName: "",
        lastNameError: "",
        email: "",
        emailError: "",
        code: "",
        codeError: "",
        showForm: true,
      });
    }
  };

  render() {
    return (
      <form>
        <div hidden={this.state.showForm}>
          <TextField
            name="code"
            hintText="Ingrese el codigo"
            floatingLabelText="Codigo"
            value={this.state.code}
            onChange={(e) => this.change(e)}
            errorText={this.state.codeError}
            type="text"
            floatingLabelFixed
          />
          <br />
          <TextField
            name="name"
            hintText="Ingrese su nombre"
            floatingLabelText="Nombre"
            value={this.state.name}
            onChange={(e) => this.change(e)}
            errorText={this.state.nameError}
            floatingLabelFixed
          />
          <br />
          <TextField
            name="lastName"
            hintText="Ingrese su apellido"
            floatingLabelText="Apellido"
            value={this.state.lastName}
            onChange={(e) => this.change(e)}
            errorText={this.state.lastNameError}
            floatingLabelFixed
          />
          <br />
          <TextField
            name="email"
            hintText="Email"
            floatingLabelText="Email"
            value={this.state.email}
            type="email"
            onChange={(e) => this.change(e)}
            errorText={this.state.emailError}
            floatingLabelFixed
          />
          <br />
          <RaisedButton
            label="Guardar"
            onClick={(e) => this.onSubmit(e)}
            primary
          />
        </div>
        <div hidden={!this.state.showForm}>
          <RaisedButton
            label="Agregar Estudiante"
            onClick={() =>
              this.setState({
                showForm: false,
              })
            }
            primary
          />
        </div>
      </form>
    );
  }
}

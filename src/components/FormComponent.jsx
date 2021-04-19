import { Component } from 'react';
// import { Route } from 'react-router-dom';
class FormComponent extends Component {
  handleChange(e) {
    return e.currentTarget.value;
  }

  render() {
    console.log(this.props.defaultValue);

    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            name="search"
            onChange={this.handleChange}
            placeholder="Search the movie"
            // value={`${this.props.defaultValue}`}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
export default FormComponent;

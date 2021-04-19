import { Component } from 'react';
import PropTypes from 'prop-types';

class FormComponent extends Component {
  state = {
    inputValue: '',
  };
  componentDidMount() {
    this.setState({ inputValue: this.props.defaultValue || '' });
  }
  handleChange = e => {
    this.setState({ inputValue: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            name="search"
            onChange={this.handleChange}
            placeholder="Search the movie"
            value={this.state.inputValue}
          />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
FormComponent.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default FormComponent;

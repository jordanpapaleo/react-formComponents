import React, { Component, PropTypes } from 'react';
import ClassNameService from './ClassNameService.js';
import AttributeService from './AttributeService.js';
import Label from './Label.jsx';

class SelectMenu extends Component {
  static get displayName () {
    return 'FormComponents/Select';
  }

  static get propTypes () {
    return {
      config: PropTypes.object,
      handleChange: PropTypes.func,
      label: PropTypes.string,
      name: PropTypes.string,
      options: PropTypes.array.isRequired,
      value: PropTypes.string
    };
  }

  static get defaultProps () {
    return {
      config: {},
      label: '',
      name: '',
      options: [],
      value: ''
    };
  }

  constructor (props) {
    super(props);

    this.state = {
      value: props.value
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({
      value: e.currentTarget.value
    });

    if (this.props.handleChange) {
      this.props.handleChange(e);
    }
  }

  render () {
    const { config } = this.props;
    const inputClasses = ClassNameService.getClass(config);
    const opts = AttributeService.getAttrs(config);

    return (
      <div className="form-group">
        <Label label={this.props.label} config={{ isRequired: config.isRequired }} />
        <div className={inputClasses}>
          <select className="form-control" name={this.props.name} value={this.state.value} onChange={this.handleChange} {...opts}>
            <option defaultValue>please select</option>
            {this.props.options.map((option) => {
              return (<option value={option.value}>{option.label}</option>);
            })}
          </select>
        </div>
      </div>
    );
  }
}

export default SelectMenu;

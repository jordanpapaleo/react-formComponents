import React, { Component, PropTypes } from 'react';
import ClassNameService from './ClassNameService.js';
import AttributeService from './AttributeService.js';
import Label from './Label.jsx';

class RadioMenu extends Component {
  static get displayName () {
    return 'FormComponents/RadioMenu';
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
        <Label label={this.props.label} config={{isRequired: this.props.config.isRequired}} />

        <div className={inputClasses}>
          {this.props.options.map((option) => {
            console.info('opts', opts);
            console.info('props', this.props);

            return (
              <label className="radio-inline">
                <input type="radio" name={this.props.name} value={option.value} {...opts} />
                <span style={{lineHeight: '23px'}}>{option.label}</span>
              </label>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RadioMenu;

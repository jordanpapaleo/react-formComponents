import React, { Component, PropTypes } from 'react';
import ClassNameService from './ClassNameService.js';
import AttributeService from './AttributeService.js';
import Label from './Label.jsx';

/*
 * A Text Input component with label
 * props.config.isRequired
 * props.config.isDisabled
 * props.config.isReadonly
 * props.config.colSm
 * props.config.colMd
 * props.config.colLg
 */

class TextInput extends Component {
  static get displayName () {
    return 'FormComponents/TextInput';
  }

  static get propTypes () {
    return {
      config: PropTypes.object,
      handleChange: PropTypes.func,
      label: PropTypes.string,
      value: PropTypes.string
    };
  }

  static get defaultProps () {
    return {
      config: {},
      label: '',
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

  componentWillReceiveProps (nextProps) {
    this.setState({
      value: nextProps.value
    });
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
        <Label label={this.props.label} config={{isRequired: config.isRequired}} />
        <div className={inputClasses}>
          <input className="form-control" type="text" name={this.props.name} value={this.state.value} onChange={this.handleChange} {...opts} />
        </div>
      </div>
    );
  }
}

export default TextInput;

import React, { Component, PropTypes } from 'react';
import M from 'moment';
import _DatePicker from 'react-datepicker';
import ClassNameService from './ClassNameService.js';
import AttributeService from './AttributeService.js';
import Label from './Label.jsx';

class DatePicker extends Component {
  static get displayName () {
    return 'FormComponents/DatePicker';
  }

  static get propTypes () {
    return {
      config: PropTypes.object,
      defaultDate: PropTypes.number,
      handleChange: PropTypes.func,
      label: PropTypes.string,
      name: PropTypes.string
    };
  }

  static get defaultProps () {
    return {
      config: {},
      label: '',
      name: '',
      value: ''
    };
  }

  constructor (props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange () {

  }

  render () {
    let now = new M();
    const { config } = this.props;
    const inputClasses = ClassNameService.getClass(config);
    const opts = AttributeService.getAttrs(config);

    return (
      <div className="form-group">
        <Label label={this.props.label} config={{isRequired: this.props.config.isRequired}} />
        <div className={inputClasses}>
          <_DatePicker selected={this.props.defaultDate} onChange={this.props.handleDateChange} className="form-control" {...opts} />
        </div>
      </div>
    );
  }
}

export default DatePicker;

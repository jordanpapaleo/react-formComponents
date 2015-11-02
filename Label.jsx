import React, { Component, PropTypes } from 'react';
import classname from 'classname';

class Label extends Component {
  static get displayName () {
    return 'FormComponents/Label';
  }

  static get propTypes () {
    return {
      label: PropTypes.string.isRequired,
      config: PropTypes.object
    };
  }

  static get defaultProps () {
    return {
      label: '',
      config: {}
    };
  }

  render () {
    return (
      <label className={classname('control-label', 'col-sm-12', 'col-md-2')}>
        { this.props.label }
        {(this.props.config.isRequired) ? <span className="required" style={{color: 'red', paddingLeft: 5}}>*</span> : null}
      </label>
    );
  }
}

export default Label;

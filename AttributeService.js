const AttributeService = {
  getAttrs (attrsObj) {
    const attrs = {};

    if (attrsObj.isDisabled) {
      attrs.disabled = 'disabled';
    }

    if (attrsObj.isRequired) {
      attrs.required = 'required';
    }

    if (attrsObj.isReadonly) {
      attrs.readOnly = 'readonly';
    }

    return attrs;
  }
};

export default AttributeService;

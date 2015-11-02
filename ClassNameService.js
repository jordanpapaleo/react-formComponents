import classname from 'classname';

const ClassNameService = {
  getClass (classObj) {
    const classes = {};

    classes[`col-sm-${classObj.colSm}`] = (classObj.colSm);
    classes[`col-md-${classObj.colMd}`] = (classObj.colMd);
    classes[`col-lg-${classObj.colLg}`] = (classObj.colLg);

    return classname(classes);
  }
};

export default ClassNameService;

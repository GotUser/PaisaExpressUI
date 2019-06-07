import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Progress } from 'reactstrap';
import classNames from 'classnames';
import { mapToCssModules } from 'reactstrap/lib/utils';

const propTypes = {
  header: PropTypes.string,
  icon: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  cssModule: PropTypes.object,
  invert: PropTypes.bool
};

const defaultProps = {
  header: '87.500',
  icon: "icon-people",
  color: 'info',
  value: "25",
  children: " ",
  invert: false
};

const backgroundColor = '#ffffff';
class Widgets extends Component {


  render() {

    const { className, cssModule, header, icon, color, value, children, invert, ...attributes } = this.props;

    // demo purposes only
    const progress = { style: "", color: color, value: value };
    const card = { style: "", bgColor: "", icon: icon };

    if (invert) {
      progress.style = "progress-white";
      progress.color = "";
      card.style = "text-white";
      card.bgColor = 'bg-' + color;
    }

    const classes = mapToCssModules(classNames(className, card.style, card.bgColor), cssModule);
    progress.style = classNames("progress-xs mt-3 mb-0", progress.style);

    return (
      <Card style={{ backgroundColor }} className={classes} {...attributes}>
        <CardBody>
          <div className="h1  text-center mb-2">
            <i className={card.icon}
              style={{ color: '#f8b018' }}
            ></i>
          </div>
          {/* <div className="h4 mb-0">{ header }</div> */}
          <div className="text-center">
            <span style={{ color: '#36454f' }} className="text-uppercase font-weight-bold">{children}</span>
          </div>

          {/* <Progress className={ progress.style } color={ progress.color } value={ progress.value }/> */}
        </CardBody>
      </Card>
    )
  }
}

Widgets.propTypes = propTypes;
Widgets.defaultProps = defaultProps;

export default Widgets;
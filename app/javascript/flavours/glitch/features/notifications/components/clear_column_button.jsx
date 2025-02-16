import PropTypes from 'prop-types';
import { Component } from 'react';

import { FormattedMessage } from 'react-intl';

import { Icon }  from 'flavours/glitch/components/icon';

export default class ClearColumnButton extends Component {

  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  render () {
    return (
      <button className='text-btn column-header__setting-btn' tabIndex={0} onClick={this.props.onClick}><Icon id='eraser' /> <FormattedMessage id='notifications.clear' defaultMessage='Clear notifications' /></button>
    );
  }

}

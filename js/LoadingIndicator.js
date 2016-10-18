/**
 * Created by xuchong on 10/17/16.
 */
import React, { PropTypes } from 'react';
import css from '../../../../css_modules/qhz/loading.less'

const LoadingIndicator = ({color}) => <div className={css.pswp__preloader__icn}>
    <div className={css.pswp__preloader__cut}>
        <div className={css.pswp__preloader__donut} style={{borderColor: color}}></div>
    </div>
</div>;
LoadingIndicator.propTypes = {
    color: PropTypes.string
};
LoadingIndicator.defaultProps = {
    color: '#333'
};

export default LoadingIndicator;


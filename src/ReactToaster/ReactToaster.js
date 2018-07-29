import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './react-toaster.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class ReactToasterMessage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            showToaster: this.props.showToaster
        };

        this.closeToaster = this.closeToaster.bind(this);
        this.getBannerColor = this.getBannerColor.bind(this);
    }

    closeToaster() {
        const {showToaster} = this.state;

        this.setState({
            showToaster: !showToaster
        })
    }

    getBannerColor() {
        const {errorType} = this.props;

        switch (errorType) {
            case 'success': {
                return 'limegreen';
            }
            case 'error': {
                return 'red';
            }
            case 'warning': {
                return 'orange';
            }
        }
    }

    render() {
        const {toasterMessage, closeToasterTimings} = this.props;
        const {showToaster} = this.state;
        const backGroundColor = this.getBannerColor();

        // closes toaster after 5 secs
        if(showToaster) {
            setTimeout(() => {
                this.setState({
                    showToaster: !showToaster
                })
            }, closeToasterTimings)
        }

        return (
            <div className="toast-container">
                {
                    showToaster ?
                        <ReactCSSTransitionGroup
                            transitionName="example"
                            transitionAppear={true}
                            transitionAppearTimeout={500}
                            transitionEnter={false}
                            transitionLeave={false}>

                            <div className="react-toaster" style={{background: backGroundColor}}>
                                <div>
                                    <span className="toaster-content">{toasterMessage} </span>
                                    <span className="close-btn" onClick={this.closeToaster}>X</span>
                                </div>
                            </div>
                        </ReactCSSTransitionGroup> :
                        null
                }
            </div>

        );
    }
}

ReactToasterMessage.defaultProps = {
    showToaster: false,
    toasterMessage: 'Success !!',
    errorType: 'success',
    position: 'top',
    closeToasterTimings: 5000
};

ReactToasterMessage.propTypes = {
    showToaster: PropTypes.bool,
    toasterMessage: PropTypes.string,
    errorType: PropTypes.string,
    position: PropTypes.string,
    closeToasterTimings: PropTypes.number
};

export default ReactToasterMessage;
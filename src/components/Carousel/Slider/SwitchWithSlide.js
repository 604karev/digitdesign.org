import React from "react";
import {Switch, Route} from "react-router-dom";
import Slider from "./index";
import * as R from 'ramda'
import {connect} from 'react-redux'


class SlideOut extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childPosition: Slider.CENTER,
            curChild: props.children,
            curUniqId: props.uniqId,
            prevChild: null,
            prevUniqId: null,
            animationCallback: null
        };
    }

    swapChildren = (direction) => {
        this.setState({
            childPosition: direction,
            prevChild: null,
            prevUniqId: null,
            animationCallback: null
        });
    };
    componentDidUpdate = (prevProps, prevState) => {
        const {gallery} = this.props;
        const keys = Object.keys(gallery);
        const lastGalleryIndex = Number(keys[keys.length - 1]);

        const pathToNumber = (path) => (
            Number(R.replace('/carousel/', '', path))
        );
        const prevUniqId = pathToNumber(prevProps.uniqKey) || prevProps.children.type;
        const uniqId = pathToNumber(this.props.uniqKey) || this.props.children.type;

        const setDirectionState = (direction, callback) => {
            this.setState({
                childPosition: direction,
                curChild: this.props.children,
                curUniqId: uniqId,
                prevChild: prevProps.children,
                prevUniqId,
                animationCallback: callback
            });
        };

        if ((prevUniqId > uniqId && !(prevUniqId === lastGalleryIndex && uniqId === 1)) || (prevUniqId === 1 && uniqId === lastGalleryIndex)) {
            setDirectionState(Slider.TO_LEFT, () => this.swapChildren(Slider.FROM_RIGHT))
        }
        if ((prevUniqId < uniqId && !(prevUniqId === 1 && uniqId === lastGalleryIndex)) || (prevUniqId === lastGalleryIndex && uniqId === 1)) {
            setDirectionState(Slider.TO_RIGHT, () => this.swapChildren(Slider.FROM_LEFT))
        }
    };

    render() {
        return (
            <Slider
                position={this.state.childPosition}
                animationCallback={this.state.animationCallback}
            >
                {this.state.prevChild || this.state.curChild}
            </Slider>
        );
    }
}

const animateSwitch = (CustomSwitch, AnimatorComponent) => ({updateStep, children}) => (
    <Route
        render={({location}) => (
            <AnimatorComponent uniqKey={location.pathname} updateStep={updateStep}>
                <CustomSwitch location={location}>{children}</CustomSwitch>
            </AnimatorComponent>
        )}
    />
);
const mapStateToProps = (state) => ({
    gallery: state.gallery
});
const SwitchWithSlide = animateSwitch(Switch, connect(mapStateToProps)(SlideOut));


export default connect(mapStateToProps)(SwitchWithSlide);

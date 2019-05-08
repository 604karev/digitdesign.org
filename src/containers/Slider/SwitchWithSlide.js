import React from "react";
import {Switch, Route} from "react-router-dom";
import Slider from "./Slide";
import * as R from 'ramda'

class SlideOut extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)

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
        const prevUniqId = prevProps.uniqKey || prevProps.children.type;
        const uniqId = this.props.uniqKey || this.props.children.type;
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
        if (prevUniqId > uniqId) {
            console.log(R.replace('/slider/', '', uniqId));
            setDirectionState(Slider.TO_LEFT, () => this.swapChildren(Slider.FROM_RIGHT))
        }
        if (prevUniqId < uniqId) {
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

const animateSwitch = (CustomSwitch, AnimatorComponent) => ({
                                                                updateStep,
                                                                children
                                                            }) => (
    <Route
        render={({location}) => (
            <AnimatorComponent uniqKey={location.pathname} updateStep={updateStep}>
                <CustomSwitch location={location}>{children}</CustomSwitch>
            </AnimatorComponent>
        )}
    />
);

const SwitchWithSlide = animateSwitch(Switch, SlideOut);

export default SwitchWithSlide;

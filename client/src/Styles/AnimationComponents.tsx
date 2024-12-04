import { keyframes } from "styled-components";

const SlideInFadeLeft = keyframes`
        0% {
        opacity: 0%;
        transform: translateX(25px) scale(1);
    }

    100% {
        opacity: 1;
        transform: translateX(0px) scale(1);
    }
`

const SlideInFadeRight = keyframes`
    0% {
        opacity: 0%;
        transform: translateX(-25px) scale(1);
    }

    100% {
        opacity: 1;
        transform: translateX(0px) scale(1);
    }
`

const FadeUp = keyframes`
    0% {
        opacity: 0%;
        transform: translateY(30px) scale(0.9);
    }

    100% {
        opacity: 1;
        transform: translateY(0px) scale(1);
    }
`

export {FadeUp}
export {SlideInFadeLeft}
export {SlideInFadeRight}
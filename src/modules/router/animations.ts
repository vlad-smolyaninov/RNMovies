import {Animated, Easing} from "react-native"



export const SlideFromBottom: any = (
  index: number,
  position: { interpolate: Function },
  height: number
) => {
  const translateY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [height, 0, 0]
  })
  return {transform: [{translateY}]}
};


export const screenInterpolator = (sceneProps: { layout: any; position: any; scene: any; }) : any => {
  const {layout, position, scene} = sceneProps;
  const height = layout.initHeight;
  const {index, route} = scene
  const params = route.params || {};
  const transition = params.transition || 'default';

  // @ts-ignore
  return {
    default: SlideFromBottom(index, position, height),
  }[transition];
}

export const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 250,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator
  }
}
import equal from './isEqual'

export default ({
  props,
  nextProps,
  state,
  nextState,
  ignoreProps,
  ignoreState
}) => !equal(props, nextProps, ignoreProps) || !equal(state, nextState, ignoreState)

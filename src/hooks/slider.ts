import { useCallback, useEffect, useState } from 'react'

export interface SliderData {
  multiple?: boolean
  min?: number
  max?: number
  step?: number
  start?: number | number[]
}

export const useSlider = () => {
  value: value,
  position: props.multiple ? [] : 0,
  numberOfThumbs: props.multiple ? value.length : 1,
  offset: 10,
  precision: 0,
  mouseDown: false
}

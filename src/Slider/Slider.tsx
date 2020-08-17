import React, { FC, useState } from 'react'
import { useSlider, SliderData } from '../hooks'

export interface SliderProps extends SliderData {
  color?: string
  disabled?: boolean
  discrete?: boolean
  inverted?: boolean
  onChange?: Function
}

export const Slider: FC<SliderProps> = ({
  color = 'red',
  disabled,
  discrete,
  inverted,
  multiple,
  min = 0,
  max = 10,
  step = 1,
  start = 0
}) => {
  const [mouseDown, setMouseDown] = useState<boolean>(false)

  return (
    <div
      onMouseDown={event => this.rangeMouseDown(false, event)}
      onMouseMove={event => this.rangeMouseMove(false, event)}
      onMouseUp={event => this.rangeMouseUp(false, event)}
      onTouchEnd={event => this.rangeMouseUp(true, event)}
      onTouchMove={event => this.rangeMouseMove(true, event)}
      onTouchStart={event => this.rangeMouseDown(true, event)}
    >
      
    </div>
  )
}

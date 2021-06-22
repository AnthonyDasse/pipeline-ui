import React from 'react';
import { Button, MyAlgoButton, UPortButton } from 'pipeline-ui'

export default {
  title: 'Buttons'
}

export const solid = () => (
  <Button>
    Solid Button
  </Button>
)

export const outline = () => (
  <Button.Outline>
    Outline Button
  </Button.Outline>
)

export const text = () => (
  <Button.Text>
    Text Button
  </Button.Text>
)

export const MyAlgoSolid = () => (
  <MyAlgoButton>
    Connect with MyAlgo
  </MyAlgoButton>
)

export const MyAlgoOutline = () => (
  <MyAlgoButton.Outline>
    Connect with MyAlgo
  </MyAlgoButton.Outline>
)

export const uPortSolid = () => (
  <UPortButton.Solid>
    Connect with uPort
  </UPortButton.Solid>
)

export const uPortOutline = () => (
  <UPortButton>
    Connect with uPort
  </UPortButton>
)

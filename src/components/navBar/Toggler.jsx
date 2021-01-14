import React from 'react'
import Switch from '@material-ui/core/Switch';

const Toggler = ({toggledPropetie , inputProps}) => {
  const [toggled, setToggled] = toggledPropetie
  
  return(
    <Switch
    edge="end"
    inputProps= {inputProps? inputProps: {}}
    checked={toggled}
    onChange={e => setToggled(e.target.checked)}
    />
  )
}

export default Toggler
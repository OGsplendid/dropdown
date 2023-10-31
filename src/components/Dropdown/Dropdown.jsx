import { useState } from 'react'
import classes from './Dropdown.module.css';
import { DropdownList } from '../DropdownList';

const options = ['profile information', 'change password', 'become pro', 'help', 'log out'];

export const Dropdown = () => {

  const [state, setState] = useState(true);

  const showDropdown = () => {
    setState(!state)
  }

  return (
    <div className={classes['container']}>
        <button onClick={showDropdown} className={classes['button']}>account settings</button>
        <DropdownList items={options} hidden={state} />
    </div>
  )
}

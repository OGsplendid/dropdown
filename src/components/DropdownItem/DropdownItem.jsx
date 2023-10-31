import classes from './DropdownItem.module.css';

export const DropdownItem = ({ item }) => {
  return (
    <li className={classes['item']}>{item}</li>
  )
}

import classes from './DropdownList.module.css';
import { DropdownItem } from '../DropdownItem';

export const DropdownList = ({ items, hidden }) => {
  return (
    <ul className={`${classes['list']} ${hidden ? classes['hidden'] : ''}`}>
        {items.map((item) => (
            <DropdownItem key={item} item={item} />
        ))}
    </ul>
  )
}

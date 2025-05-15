import openMenu from '../../images/open-menu.svg';
import closeMenu from '../../images/close-menu.svg';
import useMenu from './hooks';
import './style.scss';

function Menu({items}) {
  const { open, setOpen } = useMenu();

  return (
    <nav className={`menu${ open ? ' menu--open' : ''}`}>
      <img onClick={() => setOpen(true)} src={openMenu} className="menu__open" alt="open" />
      <img onClick={() => setOpen(false)} src={closeMenu} className="menu__close" alt="close" />
      <ul className="menu__list">
        {items.map((item, index) => 
          <li key={`menu-item-${index}`} className={`menu__item${item.selected ? ' menu__item--selected' : ''}`}>
            <a className='menu__link' href={item.link}>{item.text}</a>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Menu;

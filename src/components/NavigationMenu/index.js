import Menu from '../Menu';

function NavigationMenu({pageName}) {
  const items = [
    {link: '/', text: 'Home', selected: pageName === 'home'},
    {link: '/page-1', text: 'Página 1', selected: pageName === 'page1'},
  ];
  return (
    <Menu items={items}/>
  );
}

export default NavigationMenu;

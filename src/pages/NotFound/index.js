import NavigationMenu from '../../components/NavigationMenu';
import './style.scss';

function NotFound() {
  return (
    <div className="not-found">
      <NavigationMenu />
      <header className="not-found__header">
        <p>Página não encontrada</p>
      </header>
    </div>
  );
}

export default NotFound;

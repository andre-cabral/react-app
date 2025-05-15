import NavigationMenu from '../../components/NavigationMenu';
import usePageOne from './hooks';
import './style.scss';

function PageOne() {
  const { data } = usePageOne();

  return (
    <div className="page-one">
      <NavigationMenu />
      <header className="page-one__header">
        <p>Página 1</p>
      </header>
    </div>
  );
}

export default PageOne;

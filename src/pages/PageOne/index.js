import NavigationMenu from '../../components/NavigationMenu';
import Card from '../../components/Card';
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
      <main className="page-one__container">
        {data?.cards && data?.cards?.map((item, index) => 
          <Card key={`page-one-card-${index}`} title={item.title} text={item.text} />
        )}
        {!data?.cards && <div className="page-one__loading">Carregando...</div>}
      </main>
    </div>
  );
}

export default PageOne;

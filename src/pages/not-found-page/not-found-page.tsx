import { Link } from 'react-router-dom';
import Header from '../../components/header/header';

function PageNotFound (): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header/>
      <section className="page page--gray page--main">
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </div>
  );
}

export default PageNotFound;

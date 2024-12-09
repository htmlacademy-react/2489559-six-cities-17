import Header from '../../components/header/header';

type PageNotFoundProps = {
  emailAddress: string;
  favoriteCount: number;
}

function PageNotFound ({emailAddress, favoriteCount}: PageNotFoundProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header
        emailAddress={emailAddress}
        favoriteCount={favoriteCount}
      />
      <section className="page page--gray page--main">
        <h1>404. Page not found</h1>
        <a href="/">Вернуться на главную</a>
      </section>
    </div>
  );
}

export default PageNotFound;

import MainPage from '../../pages/main-page/main-page';

type AppPageProps = {
  placesToStay: number;
  emailAddress: string;
  favoriteCount: number;
}

function App({ placesToStay, emailAddress, favoriteCount }: AppPageProps): JSX.Element {
  return (
    <MainPage
      placesToStay={placesToStay}
      emailAddress={emailAddress}
      favoriteCount={favoriteCount}
    />
  );
}

export default App;

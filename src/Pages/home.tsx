import PrimaryLayout from "../Layouts/primaryLayout"

const HomePage = (): JSX.Element => {
  return( <>
  <p> Map View | Arc Web</p>
  </>)
}

HomePage.getLayout = (page: React.ReactElement) => (
  <PrimaryLayout>
    {page}
  </PrimaryLayout>
)

export default HomePage

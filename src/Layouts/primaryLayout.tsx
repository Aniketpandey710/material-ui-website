import { Box } from "@mui/material"
import Footer from "../Components/footer"
import Header from "../Components/header"

interface Props {
  children: React.ReactNode
}

const PrimaryLayout = ({ children }: Props): JSX.Element => {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  )
}

export default PrimaryLayout

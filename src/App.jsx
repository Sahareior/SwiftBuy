
import './App.css'
import Homepage from './Components/Homepage/Homepage'
import Footer from './Components/Shared/Footer';
import Navbar from './Components/Shared/Navbar'
// import { useGetProductsQuery } from './Redux/apiSlice';

function App() {

//   const { data: products, refetch } = useGetProductsQuery();
// console.log(products)
  return (
    <>
<Navbar />
<Homepage />
<Footer />
    </>
  )
}

export default App

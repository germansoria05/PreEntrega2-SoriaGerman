
import './App.css'
import NavBar from './components/NAvBar/Navbar'

function App() {
 
  const enlaces = [
    "Inicio",
    "Bicicletas",
    "Respuestos",
    "Contactos",
  ]
 
  return (
    <>
    <h1>Hola Mundo</h1>
   <NavBar links={enlaces}/>  
    </>
  )
}
export default App

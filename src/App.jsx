import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import WarehousePage from './pages/WarehousePage'
import CustomerPage from './pages/CustomerPage'
import SupplierPage from './pages/SupplierPage'
import EmployeePage from './pages/EmployeePage'
import Sidebar from './components/Sidebar'

function App() {
    return (
        <Router>
            <div className='flex h-screen w-screen bg-background'>
                {/* Sidebar or Header can go here */}
                <Sidebar />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/products' element={<ProductPage />} />
                    <Route path='/warehouses' element={<WarehousePage />} />
                    <Route path='/customers' element={<CustomerPage />} />
                    <Route path='/suppliers' element={<SupplierPage />} />
                    <Route path='/employees' element={<EmployeePage />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App

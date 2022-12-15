import { Route, Routes } from 'react-router-dom';
import Page404 from 'pages/Page404';
import SignIn from 'pages/SignIn/SignIn';
import usePages from 'hooks/usePages';
import Home from 'pages/Home';

function App() {
    const [routes] = usePages();
    return (
        <Routes>
            {/* <Route path='/signup' element={<SignUp />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Page404 />} />
        </Routes>
    );
}

export default App;

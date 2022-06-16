import React, { Fragment} from 'react'
import { BrowserRouter } from 'react-router-dom';
import Category from './components/Category';
import Footer from './components/Footer';
import Search from './components/Search';
import Pages from './pages/Pages';
function App() {
         
          
          return (
            <Fragment>
              <BrowserRouter>
                <Category></Category>
                
                <div className="container m-auto px-4">
                  <Search></Search>
                  <Pages></Pages>
                </div>
                <Footer></Footer>
              </BrowserRouter>
            </Fragment>
        )
}

export default App;

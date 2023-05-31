
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AccordionParent from './components/Accordion/AccordionParent';
import Sidebar from './components/Sidebar/Sidebar';
import {Dashboard,About,Analytics,Comment,Product,ProductList} from './pages'


const App = ()=>{
    return(
        <div className='main'>
            {/* <AccordionParent data={data}/> */}
            
            <BrowserRouter>
                <Sidebar>
                    <Routes>
                        <Route path='/' element={ <Dashboard/>}/>
                        <Route path='/dashboard' element={ <Dashboard/>}/>
                        <Route path='/about' element={ <About/>}/>
                        <Route path='/comment' element={ <Comment/>}/>
                        <Route path='/analytics' element={ <Analytics/>}/>
                        <Route path='/product' element={ <Product/>}/>
                        <Route path='/productList' element={ <ProductList/>}/>
                    </Routes>
                </Sidebar>
            </BrowserRouter>
            
        </div>
    );
};

export default App;

const data = [
    {
        item : 'Item 1',
        child : [
            {
                item : 'CHild 1.1'
            },
            {
                item : 'CHild 1.2'
            },
            {
                item : 'CHild 1.3'
            }
        ]
    },
    {
        item : 'Item 2',
    },
    {
        item : 'Item 3',
        child : [
            {
                item : 'CHild 3.1',
                child : [
                    {
                        item : 'CHild 3.1.1'
                    },
                    {
                        item : 'CHild 3.1.2'
                    },
                    {
                        item : 'CHild 3.1.3'
                    }
                ]

            }
        ]
    },
]
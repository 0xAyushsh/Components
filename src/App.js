
import './App.css';
import Components from './components/Components';



const App = ()=>{
    return(
        <div className='main'>
            <Components data={data}/>
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
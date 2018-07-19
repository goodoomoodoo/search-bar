import React from 'react';
import HeadBar from './component/HeadBar';
import Display from './component/Display';
import Footer from './component/Footer';
import Message from './component/Message';

class App extends React.Component
{
    render()
    {
        return (
            <div>
                <HeadBar />
                <Display />
                <Message />
                <Footer />
            </div>
        );
    }
}

export default App;
import {useState, useEffect} from 'react';
import MemoryGame from "./components/MemoryGame";

const cards = [
    { value: 'https://plus.unsplash.com/premium_vector-1721177100024-8832722a1a19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDN8fHxlbnwwfHx8fHw%3D', id: 1 },
    { value: 'https://plus.unsplash.com/premium_vector-1721177100024-8832722a1a19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDN8fHxlbnwwfHx8fHw%3D', id: 2 },

    { value: 'https://plus.unsplash.com/premium_vector-1713456459487-91215cfc373c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDd8fHxlbnwwfHx8fHw%3D', id: 3 },
    { value: 'https://plus.unsplash.com/premium_vector-1713456459487-91215cfc373c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLWxpa2VkfDd8fHxlbnwwfHx8fHw%3D', id: 4 }
];


function App() {
    return (
        <>
            <MemoryGame cards={cards}>
            </MemoryGame>
        </>
    );
}

export default App;


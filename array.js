
import React from 'react'
function RenderingArrayOfObjects() {
    const data = [
        {
            "Book name": "The Guide",
            "Author Name": "Rk Narayan"
        },
        {
            "Book name": "THE PRIVATE LIFE OF AN INDIAN PRINCE BY",
            "Author Name": "Mulk Raj Anand"
        },
        {
            "Book name": "Train to Pakistan",
            "Author Name": "Khuswant Singh"
        },
        {
            "Book name": "Godan",
            "Author Name": "Munshi Prem Chand"
        },
        {
            "Book name": "The Room On the roof",
            "Author Name": "Rushkin Bond"
        }
    ]
    const listItems = data.map(
        (element) => {
            return (
                <ul type="disc">
                    <li style={{
                        fontWeight: 'bold',
                        color: 'red'
                    }}
                    >
                        {element.State}
                    </li>
                    <li>{element.Capital}</li>
                </ul>
            )
        }
    )
    return (
        <div>
            {listItems}
        </div>
    )
}
function App() {
    return (
        <div className="App">
            <div>
                <h3>Rendering Array of Objects</h3>
                <br></br>
                <RenderingArrayOfObjects />
            </div>
        </div>
    );
}
 
export default App;
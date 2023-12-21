import {useState} from "react";

const CarSelection = () => {
    const colorList = [
        'red', 'black', 'green', 'yellow'
    ]

    const carList = [
        'Mercedes', 'Range Rover', 'Lamborghini', 'Ferrari'
    ]

    const [selectedCar, setSelectedCar] = useState(carList[0]);
    const [selectedColor, setSelectedColor] = useState(colorList[0]);
    const handleCarSelection = (event) => {
        setSelectedCar(event.target.value);
    }

    const handleColorSelection = (event) => {
        setSelectedColor(event.target.value);
    }

    return(
        <>
            <span>Select Car: </span>
            <select value={selectedCar} onChange={handleCarSelection} >
                {carList.map((car) => (
                    <option key={car} value={car}>
                        {car}
                    </option>
                ))}
            </select>
            <br/>
            <span>Select Color: </span>
            <select onChange={handleColorSelection} value={selectedColor}>
                {colorList.map((color) => (
                    <option key={color} value={color}>
                        {color}
                    </option>
                ))}
            </select>
            <p>You selected a {selectedColor} - {selectedCar}</p>
        </>
    )
}

export default CarSelection;
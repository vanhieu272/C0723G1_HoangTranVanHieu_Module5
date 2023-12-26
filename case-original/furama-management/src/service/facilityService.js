const facilityList =[
    {
        id: 1,
        name: "Room Superior Gardens",
        area: 40,
        cost: "3.000.000Đ",
        maximumPeople : 2,
        typeRent: "Room",
        images :"https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Suite-Feature-370x239.jpg",
    },
    {
        id: 2,
        name: "Room Deluxe View Beach",
        area: 30,
        cost: "2.500.000Đ",
        maximumPeople : 2,
        typeRent: "Room",
        images :"https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg",
    },
    {
        id: 3,
        name: "Villa 2 Bedrooms & Pool",
        area: 45,
        cost: "5.500.000Đ",
        maximumPeople : 4,
        typeRent: "Villa",
        images :"https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg",
    },
    {
        id: 4,
        name: "Villa 2 Bedrooms & Pool",
        area: 50,
        cost: "4.500.000Đ",
        maximumPeople : 2,
        typeRent: "Villa",
        images :"https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Garden-Superior-TwinBed-1-F-370x239.jpg",
    },
    {
        id: 5,
        name: "Connecting Room For Family",
        area: 50,
        cost: "7.700.000Đ",
        maximumPeople : 5,
        typeRent: "Room",
        images :"https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Ocean-Studio-Suite-F-370x239.jpg",
    },
    {
        id: 6,
        name: "Suite Presidential 2 Bedrooms",
        area: 125,
        cost: "19.000.000Đ",
        maximumPeople : 5,
        typeRent: "Room",
        images :"https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg",
    }
]
export function getAll() {
    return facilityList;
}
export function saveFacility(facility) {
    return facilityList.push(facility);
}
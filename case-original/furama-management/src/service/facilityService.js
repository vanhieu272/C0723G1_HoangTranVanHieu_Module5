const facilityList =[
    {
        id: 1,
        name: "Phòng Superior hướng vườn (garden superior)",
        area: 40,
        cost: "3.000.000Đ",
        maximumPeople : 2,
        typeRent: "Room",
        images :"/img_3.png",
    },
    {
        id: 2,
        name: "Deluxe hướng biển (ocean deluxe)",
        area: 30,
        cost: "2.500.000Đ",
        maximumPeople : 2,
        typeRent: "Room",
        images :"/img_4.png",
    },
    {
        id: 3,
        name: "Biệt thự Hồ bơi có 2 Phòng ngủ (2 Bedroom Pool Villa)",
        area: 45,
        cost: "5.500.000Đ",
        maximumPeople : 4,
        typeRent: "Villa",
        images :"/img_5.png",
    },
    {
        id: 4,
        name: "Biệt thự 1 phòng ngủ Có hồ bơi Bao gồm bữa sáng (1 Bedroom Pool Villa With Breakfast)",
        area: 50,
        cost: "4.500.000Đ",
        maximumPeople : 2,
        typeRent: "Villa",
        images :"/img_8.png",
    },
    {
        id: 5,
        name: "Phòng liên thông dành cho gia đình (Family Connecting Room)",
        area: 50,
        cost: "7.700.000Đ",
        maximumPeople : 5,
        typeRent: "Room",
        images :"/img_9.png",
    },
    {
        id: 6,
        name: "Suite Tổng Thống 2 phòng ngủ (Two Bedroom Presidential Suite)",
        area: 125,
        cost: "19.000.000Đ",
        maximumPeople : 5,
        typeRent: "Room",
        images :"/img_10.png",
    }
]
export function getAll() {
    return facilityList;
}
export function saveFacility(facility) {
    return facilityList.push(facility);
}
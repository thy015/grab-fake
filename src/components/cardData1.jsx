import food1 from "../images/food-1.png";
import food2 from "../images/food-2.png";
import food3 from "../images/food-3.png";
import food4 from "../images/food-4.png";
  // card data
  const optionsMD = [
    {
      label: "Thêm 1 miếng gà không cay",
      price: "31.000",
    },
    {
      label: "4 miếng gà Nuggets và xốt BBQ",
      price: "31.000",
    },
    {
      label: "Thêm 1 miếng gà cay",
      price: "31.000",
    },
    {
      label: "Khoai tây chiên",
      price: "0",
    },
    {
      label: "Bắp ngô tách hạt",
      price: "0",
    },
    {
      label: "Xà lách xắt",
      price: "0",
    },
    {
      label: "Tắc Muối Mơ Ngâm Hạt Chia cỡ V",
      price: "14.000",
    },
    {
      label: "Coca-Cola Cỡ Lớn",
      price: "5.000",
    },
    {
      label: "Cà Phê Sữa Đá Cỡ Vừa",
      price: "8.000",
    },
    {
      label: "Americano Đá Viên Cỡ Vừa",
      price: "18.000",
    },
    {
      label: "Sữa Chua Uống Dâu Tây",
      price: "44.000",
    },
    {
      label: "Matcha Đá Viên Cỡ Lớn",
      price: "58.000",
    },
    {
      label: "Americano Nóng Cỡ Nhỏ",
      price: "18.000",
    },
  ];
const cardData = [
    {
      val: "0",
      img: food1,
      cardTitle: "McDonalds - Hồ Gươm",
      cardText: "Gà Rán - Burger, Món Quốc Tế",
      star: "4.5",
      min: "30",
      dist: "2km",
      describe: "50K off, combo trưa chỉ 40K, ngoài ra không tặng kèm gì",
      options:optionsMD
    },
    {
      val: "1",
      img: food2,
      cardTitle: "Cơm Niêu Singapore",
      cardText: "Cơm",
      star: "4.3",
      min: "25",
      dist: "1,4km",
      describe:
        "Tặng ngay Trà Tắc Xí Muội 700ML khi đặt đơn tối thiểu 150.000₫",
    },
    {
      val: "2",
      img: food3,
      cardTitle: "CƠM THỐ BÁCH KHOA",
      cardText: "Cơm chay - Healthy - Đồ chay",
      star: "4.2",
      min: "28",
      dist: "2,4km",
      describe: "Lời nói đầu môi anh ơi trót lưỡi đầu môi",
    },
    {
      val: "3",
      img: food4,
      cardTitle: "Bánh Mì Cô Chun",
      cardText: "Bánh mì - xôi",
      star: "4.7",
      min: "20",
      dist: "1km",
      describe: "Phải xa đành thôi sao anh gian dối người ơi",
    },
  ];
  
export default cardData
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Card } from "react-bootstrap";

let MainItem = createSlice({
  name: "MainItem",
  initialState: [
    {
      id: 1,
      brand: "Stussy",
      name: "Stussy x Martine Rose Collage Pigment Dyed T-Shirt Black",
      price: "134,000",
    },
    {
      id: 2,
      brand: "Nike",
      name: "Nike x Peaceminusone Kwondo1 Black and White",
      price: "238,000",
    },
    {
      id: 3,
      brand: "Nike",
      name: "Nike x Peaceminusone LS T-Shirt Black (DR0098-010)",
      price: "150,000",
    },
    {
      id: 4,
      brand: "Ader error",
      name: "Ader Error Log; baus Off White",
      price: "499,000",
    },
    {
      id: 5,
      brand: "Stussy",
      name: "Stussy Plush T-Shirt Black",
      price: "100,000",
    },
    {
      id: 6,
      brand: "Stussy",
      name: "Stussy Melted T-Shirt White",
      price: "105,000",
    },
    {
      id: 7,
      brand: "Crocs",
      name: "Crocs x Winner All Terrain Clog Vanilla",
      price: "120,000",
    },
    {
      id: 8,
      brand: "Asics",
      name: "(W) Asics Gel-1130 Glacier Grey Pure Silver",
      price: "119,000",
    },
    {
      id: 9,
      brand: "Nike",
      name: "Nike Air Force 1 '07 Low White",
      price: "120,000",
    },
    {
      id: 10,
      brand: "Apple",
      name: "Apple AirPods Pro 2nd Gen (Korean Ver.)",
      price: "298,000",
    },
    {
      id: 11,
      brand: "Jordan",
      name: "Jordan 1 x Travis Scott Retro Low OG SP Black Phantom",
      price: "443,000",
    },
    {
      id: 12,
      brand: "Nike",
      name: "Nike Air Force 1 '07 WB Flax",
      price: "152,000",
    },
  ],
});

let ManItem = createSlice({
  name: "ManItem",
  initialState: [
    {
      id: 13,
      brand: "Stussy",
      name: "Stussy Melted T-Shirt Black",
      price: "90,000",
    },
    {
      id: 14,
      brand: "Sansan Gear",
      name: "Sansan Gear Paneled Jacket Grey - 23SS",
      price: "165,000",
    },
    { id: 15, brand: "Surgery", name: "Surgery Process 001", price: "428,000" },
    {
      id: 16,
      brand: "Nike",
      name: "Nike Air More Uptempo Slide Black White",
      price: "100,000",
    },
    {
      id: 17,
      brand: "New Balance",
      name: "New Balance 2002R Protection Pack Rain Cloud",
      price: "250,000",
    },
    {
      id: 18,
      brand: "Needles",
      name: "Needles Straight Track Pants Poly Smooth Black",
      price: "415,000",
    },
    {
      id: 19,
      brand: "Supreme",
      name: "Supreme Webbing Keychain Red - 23SS",
      price: "41,000",
    },
    {
      id: 20,
      brand: "Balenciaga",
      name: "Balenciaga 3XL Sneakers White Red",
      price: "1,399,000",
    },
    {
      id: 21,
      brand: "Kapital",
      name: "Kapital 5G Cotton Knit Bone Vest Khaki",
      price: "380,000",
    },
    {
      id: 22,
      brand: "Rimowa",
      name: "Rimowa Original Cabin Aluminium Suitcase Silver",
      price: "-",
    },
    {
      id: 23,
      brand: "Comoli",
      name: "Comoli 5P Denim Pants Bleach - 23SS",
      price: "860,000",
    },
    {
      id: 24,
      brand: "Nike",
      name: "Nike ACG Storm-Fit ADV Cascade Rains Full Zip Jacket Black - Asia",
      price: "268,000",
    },
  ],
});

let WomenItem = createSlice({
  name: "WomemItem",
  initialState: [
    {
      id: 25,
      brand: "Dior Beauty",
      name: "Dior Addict Lipstick Case Indigo Denim (Korean Ver.)",
      price: "-",
    },
    {
      id: 26,
      brand: "Repetto",
      name: "(W) Repetto Cendrillon Nappa Calfskin Ballerinas Black",
      price: "208,000",
    },
    {
      id: 27,
      brand: "Human Made",
      name: "Human Made Graphic T-Shirt #04 White",
      price: "164,000",
    },
    {
      id: 28,
      brand: "Mischief",
      name: "(W) Mischief Rhombus Uniform Track Jacket Black- The Hyundai",
      price: "124,000",
    },
    {
      id: 29,
      brand: "Buly 1803",
      name: "Buly 1803 Eau Triple Lichen D’ecosse 75ml (Korean Ver.)",
      price: "200,000",
    },
    {
      id: 30,
      brand: "Supreme",
      name: "Supreme Washed Chino Twill Camp Cap Yellow - 23SS",
      price: "215,000",
    },
    {
      id: 31,
      brand: "The Museum Visitor",
      name: "The Museum Visitor Flower Printed Reversible Lap Skirt -23PS",
      price: "213,000",
    },
    {
      id: 32,
      brand: "Chloe",
      name: "(W) Chloe Lauren Sneakers Mild Beige",
      price: "352,000",
    },
    {
      id: 33,
      brand: "Matin Kim",
      name: "Matin Kim Color Bunny Necklace Black",
      price: "95,000",
    },
    {
      id: 34,
      brand: "Byredo",
      name: "Byredo Blanche Hand Cream 30ml (Korean Ver.)",
      price: "45,000",
    },
    {
      id: 35,
      brand: "Art of Field",
      name: "Art Of Field Packable Wrinkle Half Zip-Up Gray",
      price: "109,000",
    },
    {
      id: 36,
      brand: "Matin Kim",
      name: "Matin Kim Glossy Fabric Round Cross Bag Black",
      price: "-",
    },
  ],
});

let BrandItem = createSlice({
  name: "brandItem",
  initialState: [
    {
      id: 37,
      brand: "Recto",
      name: "[KREAM Exclusive] Recto Mens Signature Logo Zip Sweatshirt",
      price: "148,000",
    },
    {
      id: 38,
      brand: "Surgery",
      name: "[KREAM Exclusive] Surgery Bone Cutting Varsity Jacket Ver.2 Kream",
      price: "358,200",
    },
    {
      id: 39,
      brand: "Sansan Gear",
      name: "Sansan Gear Front Pocket Pants Purple Grey - 23SS",
      price: "129,000",
    },
    {
      id: 40,
      brand: "Polyteru",
      name: "Polyteru Lami Parka Purple Gray - 23SS",
      price: "287,000",
    },
    {
      id: 41,
      brand: "MISU A BARBE",
      name: "Misu A Barbe Splits Denim Long Skirt Dark Navy",
      price: "283,500",
    },
    {
      id: 42,
      brand: "Thevinyhouse",
      name: "[KREAM Exclusive] Thevinylhouse Dragon T-Shirt White Black",
      price: "38,200",
    },
    {
      id: 43,
      brand: "PAIN OR PLEASURE",
      name: "[Pre-Order] Pain Or Pleasure Women Orchid Skirt Cream",
      price: "129,000",
    },
    {
      id: 44,
      brand: "The Museum Visitor",
      name: "The Museum Visitor Heart Sprayed Stripe PK T-Shirts",
      price: "138,000",
    },
    {
      id: 45,
      brand: "s/e/o",
      name: "s/e/o Women SHEER LONG SLEEVE TOP PINK",
      price: "68,000",
    },
    {
      id: 46,
      brand: "Levi's",
      name: "Levi's 501® '93 Cut Off Jean Shorts Medium Indigo",
      price: "69,000",
    },
    {
      id: 47,
      brand: "Rootfinder",
      name: "Rootfinder Maneuver Jacket Grey",
      price: "359,000",
    },
    {
      id: 48,
      brand: "MISU A BARBE",
      name: "Misu A Barbe Jules Bucket Medium Air",
      price: "121,500",
    },
  ],
});

let Dessert = createSlice({
  name: "dessert",
  initialState: [
    {
      id: 1,
      brand: "Atelierpond",
      name: "atelier POND Cookie Box - 30 pieces",
      nameSub: "아틀리에폰드 쿠키박스 30개입",
      price: "98,000원",
    },
    {
      id: 2,
      brand: "Patisseriepond",
      name: "patisserie POND Financier - 8 pieces",
      nameSub: "파티세리폰드 휘낭시에 8개입",
      price: "52,000원",
    },
    {
      id: 3,
      brand: "Garuharu",
      name: "GARUHARU Eclair - 5 pieces",
      nameSub: "가루하루 에클레어 5개입",
      price: "44,500원",
    },
  ],
});

let Planning = createSlice({
  name: "planning",
  initialState: [
    { id: 1, title: "5월 수수료 할인 이벤트", sub: "수수료 최대 50% 할인!" },
    { id: 2, title: "Gift of the Month", sub: "5월을 위한 이상적인 선물 추천" },
    {
      id: 3,
      title: "줌인리뷰 2차",
      sub: "#줌인리뷰 태그하면 최대 5만 5천 포인트!",
    },
    { id: 4, title: "LE17SEPTEMBRE 23SS", sub: "5% 구매적립 & 무료배송" },
    {
      id: 5,
      title: "KEEN 요기 & 산타 콜라보 단독 발매",
      sub: "[-23.5.10] 신상 5% & 인기 샌들 10% 할인",
    },
    {
      id: 6,
      title: "창고보관 판매 수수료 할인 이벤트",
      sub: "창고보관으로 구매한 상품 재판매 시 수수료 0.5%",
    },
    {
      id: 7,
      title: "HALEINE Jewelry Collection",
      sub: "[23.4.24 ~ 4.30] 10% 할인 & 5% 구매적립 & 무료배송",
    },
    {
      id: 8,
      title: "THE GREATEST 오픈",
      sub: "[23.4.24 ~ 4.30] 전 상품 20% 할인 & 5% 구매적립",
    },
    {
      id: 9,
      title: "NOT YOUR ROSE 오픈",
      sub: "[23.4.21 ~ 4.27] 최대 10% 할인 & 5% 구매적립",
    },
    {
      id: 10,
      title: "SURGERY 프로세스 라인 단독 Drop",
      sub: "단독 발매 & 5% 구매적립 & 무료배송",
    },
    { id: 11, title: "Gorpcore Look", sub: "믹스매치 최적화, 눈여겨볼 것!" },
    { id: 12, title: "Sporty & Luxury", sub: "편안한 력셔리 무드" },
    {
      id: 13,
      title: "THEVINYLHOUSE 23 Hot Summer 컬렉션",
      sub: "[23.4.19 ~ 4.30] 단독 15% 할인 & 5% 구매적립 & 무료배송",
    },
    {
      id: 14,
      title: "MISU A BARBE 23SS",
      sub: "[23.4.17 ~ 4.23] 최대 15% 할인 & 5% 구매적립 & 무료배송",
    },
    { id: 15, title: "FETCH 23S", sub: "5% 구매적립 & 무료배송" },
    { id: 16, title: "Canvas & Raffia", sub: "가벼워진 날씨와 어울리는 소재" },
    {
      id: 17,
      title: "Racing Heartbeat",
      sub: "모터스포츠의 개성이 담긴 아이템",
    },
    { id: 18, title: "AQ 오픈", sub: "5% 구매적립" },
    {
      id: 19,
      title: "PICO 오픈",
      sub: "[23.4.13 ~ 4.19] 10% 할인 & 5% 구매적립 & 무료배송",
    },
    {
      id: 20,
      title: "s/e/o 23SS",
      sub: "[23.4.11-] 단독발매 & 5% 구매적립 & 무료배송",
    },
    {
      id: 21,
      title: "SENTIMENTS 23SS",
      sub: "[~23.4.24] 전 상품 30% 할인 & 일부 단독상품 & 5% 구매적립",
    },
    {
      id: 22,
      title: "PRTPRTSHOP 오픈",
      sub: "일부 단독 특가 & 5% 구매적립 & 무료배송",
    },
    { id: 23, title: "Y2K Vibes", sub: "돌고 도는 복고 바이브" },
    {
      id: 24,
      title: "HAVELESS",
      sub: "[23.4.6 ~ 4.12] 10% 할인 & 일부 단독 & 5% 구매적립 & 무료배송",
    },
    {
      id: 25,
      title: "SAFARISPOT 단독 선발매",
      sub: "[23.4.6 ~ 4.13] 단독 선발매 & 10% 할인 & 5% 구매적립",
    },
    {
      id: 26,
      title: "STU SPRING",
      sub: "[23.4.5 19:00-] 봄 컬렉션 단독 혜택 5% 구매적립 & 무료배송",
    },
    { id: 27, title: "AOP 오픈", sub: "단독 발매 & 5% 구매적립 & 무료배송" },
    {
      id: 28,
      title: "POLYTERU x 1011 GALLERY 단독 Drop",
      sub: "플랫폼 단독 발매 & 5% 구매적립 & 무료배송",
    },
    { id: 29, title: "On Running 오픈", sub: "5% 구매적립 & 무료배송" },
    {
      id: 30,
      title: "PERPER PERPER 오픈",
      sub: "[23.4.3 ~ 4.9] 전 상품 5% 할인 & 5% 구매적립",
    },
  ],
});

export default configureStore({
  reducer: {
    MainItem: MainItem.reducer,
    ManItem: ManItem.reducer,
    WomenItem: WomenItem.reducer,
    BrandItem: BrandItem.reducer,
    Dessert: Dessert.reducer,
    Planning: Planning.reducer,
  },
});

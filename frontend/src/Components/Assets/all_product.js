// const all_product = [
//     // Men Watches (first 12)
//     {
//         id: 1,
//         name: "WatchNow Lady-Datejust",
//         category: "Women", // ✅ Changed from "Men"
//         image: require("./men/omega_constellation.png"), 
//         new_price: 3800,
//         old_price: 4500
//     },
//     {
//         id: 2,
//         name: "WatchNow Ballon Bleu",
//         category: "Women", // ✅ Changed from "Men"
//         image: require("./men/cartier_ballon_bleu.webp"), 
//         new_price: 6800,
//         old_price: 8000
//     },
//     {
//         id: 3,
//         name: "WatchNow Aquaracer",
//         category: "Women", // ✅ Changed from "Men"
//         image: require("./men/tag_heuer_aquaracer.png"), 
//         new_price: 2700,
//         old_price: 3200
//     },
//     {
//         id: 4,
//         name: "WatchNow Carlie Mini",
//         category: "Women", // ✅ Changed from "Men"
//         image: require("./men/fossil_carlie_mini.png"), 
//         new_price: 1100,
//         old_price: 1500
//     },
    
//     {
//         id: 5,
//         name: "WatchNow Submariner",
//         category: "Men",
//         image: require("./men/rolex_submariner.webp"), 
//         new_price: 8200,
//         old_price: 9500
//     },
//     {
//         id: 6,
//         name: "WatchNow Daytona",
//         category: "Men",
//         image: require("./men/rolex_daytona.webp"), 
//         new_price: 12400,
//         old_price: 14500
//     },
//     {
//         id: 7,
//         name: "WatchNow Omega Seamaster",
//         category: "Men",
//         image: require("./men/omega_seamaster.avif"), 
//         new_price: 5000,
//         old_price: 5800
//     },
//     {
//         id: 8,
//         name: "WatchNow Tag Heuer Monaco",
//         category: "Men",
//         image: require("./men/tag_heuer_monaco.avif"), 
//         new_price: 3500,
//         old_price: 4000
//     },
//     {
//         id: 9,
//         name: "WatchNow Patek Philippe Calatrava",
//         category: "Men",
//         image: require("./men/patek_philippe_calatrava.jpg"), 
//         new_price: 22000,
//         old_price: 25000
//     },
//     {
//         id: 10,
//         name: "WatchNow Audemars Piguet Royal Oak",
//         category: "Men",
//         image: require("./men/audemars_piguet_royal_oak.webp"), 
//         new_price: 27000,
//         old_price: 30000
//     },
//     {
//         id: 11,
//         name: "WatchNow Omega Speedmaster",
//         category: "Men",
//         image: require("./men/omega_speedmaster.webp"), 
//         new_price: 5200,
//         old_price: 6000
//     },
//     {
//         id: 12,
//         name: "WatchNow Breitling Navitimer",
//         category: "Men",
//         image: require("./men/breitling_navitimer.webp"), 
//         new_price: 5900,
//         old_price: 6500
//     },

//     // Women Watches (next 12)
//     {
//         id: 13,
//         name: "WatchNow Casio G-Shock",
//         category: "Women",
//         image: require("./women/casio_g_shock.avif"), 
//         new_price: 800,
//         old_price: 1200,
//     },
//     {
//         id: 14,
//         name: "WatchNow Fossil Hybrid HR",
//         category: "Women",
//         image: require("./women/fossil_hybrid_hr.webp"), 
//         new_price: 1600,
//         old_price: 2000,
//     },
//     {
//         id: 15,
//         name: "WatchNow Seiko 5",
//         category: "Women",
//         image: require("./women/seiko_5.webp"), 
//         new_price: 1500,
//         old_price: 1800
//     },
//     {
//         id: 16,
//         name: "WatchNow Citizen Eco-Drive",
//         category: "Women",
//         image: require("./women/citizen_eco_drive.jpg"), 
//         new_price: 2000,
//         old_price: 2500,
//     },
//     {
//         id: 17,
//         name: "WatchNow Timex Weekender",
//         category: "Women",
//         image: require("./women/timex_weekender.jpg"), 
//         new_price: 4500,
//         old_price: 6000
//     },
//     {
//         id: 18,
//         name: "WatchNow Michael Kors Parker",
//         category: "Women",
//         image: require("./women/michael_kors_parker.webp"), 
//         new_price: 2250,
//         old_price: 2800
//     },
//     {
//         id: 19,
//         name: "WatchNow Garmin Fenix 6",
//         category: "Men", // ✅ Changed from "Women"
//         image: require("./women/garmin_fenix_6.webp"), 
//         new_price: 6500,
//         old_price: 7000
//     },
//     {
//         id: 20,
//         name: "WatchNow Apple Watch Series 6",
//         category: "Men", // ✅ Changed from "Women"
//         image: require("./women/apple_watch_series_6.webp"), 
//         new_price: 3990,
//         old_price: 4500
//     },
//     {
//         id: 21,
//         name: "WatchNow Samsung Galaxy Watch 3",
//         category: "Men", // ✅ Changed from "Women"
//         image: require("./women/samsung_galaxy_watch_3.webp"), 
//         new_price: 3500,
//         old_price: 4000
//     },
//     {
//         id: 23,
//         name: "WatchNow Huawei Watch GT 2 Pro",
//         category: "Men", // ✅ Changed from "Women"
//         image: require("./women/huawei_watch_gt_2_pro.jpg"), 
//         new_price: 2500,
//         old_price: 3000
//     },
    
//     {
//         id: 22,
//         name: "WatchNow Fitbit Charge 4",
//         category: "Women",
//         image: require("./women/fitbit_charge_4.webp"), 
//         new_price: 1300,
//         old_price: 1500
//     },
  
//     {
//         id: 24,
//         name: "WatchNow Fossil Hybrid HR",
//         category: "Women",
//         image: require("./women/fossil_hybrid_hr_smartwatch.jpg"), 
//         new_price: 1800,
//         old_price: 2200
//     },

// //     // Kids Watches (last 12)
// //     {
// //         id: 25,
// //         name: "WatchNow Amazfit GTR 2",
// //         category: "Kids",
// //         image: require("./kids/amazfit_gtr_2.jpg"), 
// //         new_price: 170,
// //         old_price: 200
// //     },
// //     {
// //         id: 26,
// //         name: "WatchNow Garmin Venu 2",
// //         category: "Kids",
// //         image: require("./kids/garmin_venu_2.jpg"), 
// //         new_price: 350,
// //         old_price: 400
// //     },
// //     {
// //         id: 27,
// //         name: "WatchNow Withings Steel HR",
// //         category: "Kids",
// //         image: require("./kids/withings_steel_hr.jpg"), 
// //         new_price: 200,
// //         old_price: 240
// //     },
// //     {
// //         id: 28,
// //         name: "WatchNow Suunto 7",
// //         category: "Kids",
// //         image: require("./kids/suunto_7.jpg"), 
// //         new_price: 400,
// //         old_price: 450
// //     },
// //     {
// //         id: 29,
// //         name: "WatchNow Polar Vantage V2",
// //         category: "Kids",
// //         image: require("./kids/polar_vantage_v2.jpg"), 
// //         new_price: 500,
// //         old_price: 550
// //     },
// //     {
// //         id: 30,
// //         name: "WatchNow TicWatch Pro 3",
// //         category: "Kids",
// //         image: require("./kids/ticwatch_pro_3.jpg"), 
// //         new_price: 300,
// //         old_price: 350
// //     },
// //     {
// //         id: 31,
// //         name: "WatchNow Fitbit Versa 3",
// //         category: "Kids",
// //         image: require("./kids/fitbit_versa_3.jpg"), 
// //         new_price: 230,
// //         old_price: 270
// //     },
// //     {
// //         id: 32,
// //         name: "WatchNow Garmin Forerunner 945",
// //         category: "Kids",
// //         image: require("./kids/garmin_forerunner_945.jpg"), 
// //         new_price: 600,
// //         old_price: 650
// //     },
// //     {
// //         id: 33,
// //         name: "WatchNow Xiaomi Mi Watch",
// //         category: "Kids",
// //         image: require("./kids/xiaomi_mi_watch.jpg"), 
// //         new_price: 120,
// //         old_price: 150
// //     },
// //     {
// //         id: 34,
// //         name: "WatchNow Amazfit Bip U Pro",
// //         category: "Kids",
// //         image: require("./kids/amazfit_bip_u_pro.jpg"), 
// //         new_price: 70,
// //         old_price: 100
// //     },
// //     {
// //         id: 35,
// //         name: "WatchNow Huawei Band 6",
// //         category: "Kids",
// //         image: require("./kids/huawei_band_6.jpg"), 
// //         new_price: 50,
// //         old_price: 70
// //     },
// //     {
// //         id: 36,
// //         name: "WatchNow Garmin Instinct Solar",
// //         category: "Kids",
// //         image: require("./kids/garmin_instinct_solar.jpg"), 
// //         new_price: 400,
// //         old_price: 450
// //     }
// ];
// export default all_product;
const all_product = [
    // ---------------- MEN'S WATCHES ----------------
    {
      id: 1,
      name: "Omega Constellation",
      category: "men",
      image: "men/omega_constellation.png",
      price: 4200,
    },
    {
      id: 2,
      name: "Cartier Ballon Bleu",
      category: "men",
      image: "men/cartier_ballon_bleu.webp",
      price: 5500,
    },
    {
      id: 3,
      name: "TAG Heuer Aquaracer",
      category: "men",
      image: "men/tag_heuer_aquaracer.png",
      price: 3000,
    },
    {
      id: 4,
      name: "Fossil Carlie Mini",
      category: "men",
      image: "men/fossil_carlie_mini.png",
      price: 1800,
    },
    {
      id: 5,
      name: "Rolex Submariner",
      category: "men",
      image: "men/rolex_submariner.webp",
      price: 8500,
    },
    {
      id: 6,
      name: "Rolex Daytona",
      category: "men",
      image: "men/rolex_daytona.webp",
      price: 8700,
    },
    {
      id: 7,
      name: "Omega Seamaster",
      category: "men",
      image: "men/omega_seamaster.avif",
      price: 5100,
    },
    {
      id: 8,
      name: "TAG Heuer Monaco",
      category: "men",
      image: "men/tag_heuer_monaco.avif",
      price: 4900,
    },
    {
      id: 9,
      name: "Patek Philippe Calatrava",
      category: "men",
      image: "men/patek_philippe_calatrava.jpg",
      price: 9500,
    },
    {
      id: 10,
      name: "Audemars Piguet Royal Oak",
      category: "men",
      image: "men/audemars_piguet_royal_oak.webp",
      price: 10500,
    },
    {
      id: 11,
      name: "Omega Speedmaster",
      category: "men",
      image: "men/omega_speedmaster.webp",
      price: 4800,
    },
    {
      id: 12,
      name: "Breitling Navitimer",
      category: "men",
      image: "men/breitling_navitimer.webp",
      price: 6200,
    },
  
    // ---------------- WOMEN'S WATCHES ----------------
    {
      id: 13,
      name: "Casio G-Shock",
      category: "women",
      image: "women/casio_g_shock.avif",
      price: 1200,
    },
    {
      id: 14,
      name: "Fossil Hybrid HR",
      category: "women",
      image: "women/fossil_hybrid_hr.webp",
      price: 1600,
    },
    {
      id: 15,
      name: "Seiko 5",
      category: "women",
      image: "women/seiko_5.webp",
      price: 1400,
    },
    {
      id: 16,
      name: "Citizen Eco Drive",
      category: "women",
      image: "women/citizen_eco_drive.jpg",
      price: 2000,
    },
    {
      id: 17,
      name: "Timex Weekender",
      category: "women",
      image: "women/timex_weekender.jpg",
      price: 1100,
    },
    {
      id: 18,
      name: "Michael Kors Parker",
      category: "women",
      image: "women/michael_kors_parker.webp",
      price: 2300,
    },
    {
      id: 19,
      name: "Garmin Fenix 6",
      category: "women",
      image: "women/garmin_fenix_6.webp",
      price: 3200,
    },
    {
      id: 20,
      name: "Apple Watch Series 6",
      category: "women",
      image: "women/apple_watch_series_6.webp",
      price: 4000,
    },
    {
      id: 21,
      name: "Samsung Galaxy Watch 3",
      category: "women",
      image: "women/samsung_galaxy_watch_3.webp",
      price: 3800,
    },
    {
      id: 22,
      name: "Fitbit Charge 4",
      category: "women",
      image: "women/fitbit_charge_4.webp",
      price: 1500,
    },
    {
      id: 23,
      name: "Huawei Watch GT 2 Pro",
      category: "women",
      image: "women/huawei_watch_gt_2_pro.jpg",
      price: 2900,
    },
    {
      id: 24,
      name: "Fossil Hybrid HR Smartwatch",
      category: "women",
      image: "women/fossil_hybrid_hr_smartwatch.jpg",
      price: 1700,
    },
  ];
  
  export default all_product;
  
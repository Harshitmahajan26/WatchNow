const all_product = [
    // Men Watches (first 12)
    {
        id: 1,
        name: "WatchNow Lady-Datejust",
        category: "Men",
        image: require("./men/omega_constellation.png"), 
        new_price: 3800,
        old_price: 4500
    },
    {
        id: 2,
        name: "WatchNow Ballon Bleu",
        category: "Men",
        image: require("./men/cartier_ballon_bleu.webp"), 
        new_price: 6800,
        old_price: 8000
    },
    {
        id: 3,
        name: "WatchNow Aquaracer",
        category: "Men",
        image: require("./men/tag_heuer_aquaracer.png"), 
        new_price: 2700,
        old_price: 3200
    },
    {
        id: 4,
        name: "WatchNow Carlie Mini",
        category: "Men",
        image: require("./men/fossil_carlie_mini.png"), 
        new_price: 110,
        old_price: 150
    },
    {
        id: 5,
        name: "WatchNow Submariner",
        category: "Men",
        image: require("./men/rolex_submariner.webp"), 
        new_price: 8200,
        old_price: 9500
    },
    {
        id: 6,
        name: "WatchNow Daytona",
        category: "Men",
        image: require("./men/rolex_daytona.webp"), 
        new_price: 12400,
        old_price: 14500
    },
    {
        id: 7,
        name: "WatchNow Omega Seamaster",
        category: "Men",
        image: require("./men/omega_seamaster.avif"), 
        new_price: 5000,
        old_price: 5800
    },
    {
        id: 8,
        name: "WatchNow Tag Heuer Monaco",
        category: "Men",
        image: require("./men/tag_heuer_monaco.avif"), 
        new_price: 3500,
        old_price: 4000
    },
    {
        id: 9,
        name: "WatchNow Patek Philippe Calatrava",
        category: "Men",
        image: require("./men/patek_philippe_calatrava.jpg"), 
        new_price: 22000,
        old_price: 25000
    },
    {
        id: 10,
        name: "WatchNow Audemars Piguet Royal Oak",
        category: "Men",
        image: require("./men/audemars_piguet_royal_oak.webp"), 
        new_price: 27000,
        old_price: 30000
    },
    {
        id: 11,
        name: "WatchNow Omega Speedmaster",
        category: "Men",
        image: require("./men/omega_speedmaster.webp"), 
        new_price: 5200,
        old_price: 6000
    },
    {
        id: 12,
        name: "WatchNow Breitling Navitimer",
        category: "Men",
        image: require("./men/breitling_navitimer.webp"), 
        new_price: 5900,
        old_price: 6500
    },

    // Women Watches (next 12)
    {
        id: 13,
        name: "WatchNow Casio G-Shock",
        category: "Women",
        image: require("./women/casio_g_shock.avif"), 
        new_price: 80,
        old_price: 120
    },
    {
        id: 14,
        name: "WatchNow Fossil Hybrid HR",
        category: "Women",
        image: require("./women/fossil_hybrid_hr.webp"), 
        new_price: 160,
        old_price: 200
    },
    {
        id: 15,
        name: "WatchNow Seiko 5",
        category: "Women",
        image: require("./women/seiko_5.webp"), 
        new_price: 150,
        old_price: 180
    },
    {
        id: 16,
        name: "WatchNow Citizen Eco-Drive",
        category: "Women",
        image: require("./women/citizen_eco_drive.jpg"), 
        new_price: 200,
        old_price: 250
    },
    {
        id: 17,
        name: "WatchNow Timex Weekender",
        category: "Women",
        image: require("./women/timex_weekender.jpg"), 
        new_price: 45,
        old_price: 60
    },
    {
        id: 18,
        name: "WatchNow Michael Kors Parker",
        category: "Women",
        image: require("./women/michael_kors_parker.webp"), 
        new_price: 225,
        old_price: 280
    },
    {
        id: 19,
        name: "WatchNow Garmin Fenix 6",
        category: "Women",
        image: require("./women/garmin_fenix_6.webp"), 
        new_price: 650,
        old_price: 700
    },
    {
        id: 20,
        name: "WatchNow Apple Watch Series 6",
        category: "Women",
        image: require("./women/apple_watch_series_6.webp"), 
        new_price: 399,
        old_price: 450
    },
    {
        id: 21,
        name: "WatchNow Samsung Galaxy Watch 3",
        category: "Women",
        image: require("./women/samsung_galaxy_watch_3.webp"), 
        new_price: 350,
        old_price: 400
    },
    {
        id: 22,
        name: "WatchNow Fitbit Charge 4",
        category: "Women",
        image: require("./women/fitbit_charge_4.webp"), 
        new_price: 130,
        old_price: 150
    },
    {
        id: 23,
        name: "WatchNow Huawei Watch GT 2 Pro",
        category: "Women",
        image: require("./women/huawei_watch_gt_2_pro.jpg"), 
        new_price: 250,
        old_price: 300
    },
    {
        id: 24,
        name: "WatchNow Fossil Hybrid HR",
        category: "Women",
        image: require("./women/fossil_hybrid_hr_smartwatch.jpg"), 
        new_price: 180,
        old_price: 220
    },

//     // Kids Watches (last 12)
//     {
//         id: 25,
//         name: "WatchNow Amazfit GTR 2",
//         category: "Kids",
//         image: require("./kids/amazfit_gtr_2.jpg"), 
//         new_price: 170,
//         old_price: 200
//     },
//     {
//         id: 26,
//         name: "WatchNow Garmin Venu 2",
//         category: "Kids",
//         image: require("./kids/garmin_venu_2.jpg"), 
//         new_price: 350,
//         old_price: 400
//     },
//     {
//         id: 27,
//         name: "WatchNow Withings Steel HR",
//         category: "Kids",
//         image: require("./kids/withings_steel_hr.jpg"), 
//         new_price: 200,
//         old_price: 240
//     },
//     {
//         id: 28,
//         name: "WatchNow Suunto 7",
//         category: "Kids",
//         image: require("./kids/suunto_7.jpg"), 
//         new_price: 400,
//         old_price: 450
//     },
//     {
//         id: 29,
//         name: "WatchNow Polar Vantage V2",
//         category: "Kids",
//         image: require("./kids/polar_vantage_v2.jpg"), 
//         new_price: 500,
//         old_price: 550
//     },
//     {
//         id: 30,
//         name: "WatchNow TicWatch Pro 3",
//         category: "Kids",
//         image: require("./kids/ticwatch_pro_3.jpg"), 
//         new_price: 300,
//         old_price: 350
//     },
//     {
//         id: 31,
//         name: "WatchNow Fitbit Versa 3",
//         category: "Kids",
//         image: require("./kids/fitbit_versa_3.jpg"), 
//         new_price: 230,
//         old_price: 270
//     },
//     {
//         id: 32,
//         name: "WatchNow Garmin Forerunner 945",
//         category: "Kids",
//         image: require("./kids/garmin_forerunner_945.jpg"), 
//         new_price: 600,
//         old_price: 650
//     },
//     {
//         id: 33,
//         name: "WatchNow Xiaomi Mi Watch",
//         category: "Kids",
//         image: require("./kids/xiaomi_mi_watch.jpg"), 
//         new_price: 120,
//         old_price: 150
//     },
//     {
//         id: 34,
//         name: "WatchNow Amazfit Bip U Pro",
//         category: "Kids",
//         image: require("./kids/amazfit_bip_u_pro.jpg"), 
//         new_price: 70,
//         old_price: 100
//     },
//     {
//         id: 35,
//         name: "WatchNow Huawei Band 6",
//         category: "Kids",
//         image: require("./kids/huawei_band_6.jpg"), 
//         new_price: 50,
//         old_price: 70
//     },
//     {
//         id: 36,
//         name: "WatchNow Garmin Instinct Solar",
//         category: "Kids",
//         image: require("./kids/garmin_instinct_solar.jpg"), 
//         new_price: 400,
//         old_price: 450
//     }
];
export default all_product;
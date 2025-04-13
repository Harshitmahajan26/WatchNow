import db from '../db.js';

const seedProducts = async () => {
  const products = [
    // MEN'S WATCHES
    { name: "Omega Constellation", image: "men/omega_constellation.png", old_price: 4500, new_price: 4200, category: "men", description: "Classic luxury men's watch." },
    { name: "Cartier Ballon Bleu", image: "men/cartier_ballon_bleu.webp", old_price: 5800, new_price: 5500, category: "men", description: "Stylish and elegant." },
    { name: "TAG Heuer Aquaracer", image: "men/tag_heuer_aquaracer.png", old_price: 3200, new_price: 3000, category: "men", description: "Sporty and reliable." },
    { name: "Fossil Carlie Mini", image: "men/fossil_carlie_mini.png", old_price: 2000, new_price: 1800, category: "men", description: "Compact and chic." },
    { name: "Rolex Submariner", image: "men/rolex_submariner.webp", old_price: 8800, new_price: 8500, category: "men", description: "Iconic diving watch." },
    { name: "Rolex Daytona", image: "men/rolex_daytona.webp", old_price: 9000, new_price: 8700, category: "men", description: "High-performance chronograph." },
    { name: "Omega Seamaster", image: "men/omega_seamaster.avif", old_price: 5400, new_price: 5100, category: "men", description: "James Bond's favorite." },
    { name: "TAG Heuer Monaco", image: "men/tag_heuer_monaco.avif", old_price: 5200, new_price: 4900, category: "men", description: "Square and unique." },
    { name: "Patek Philippe Calatrava", image: "men/patek_philippe_calatrava.jpg", old_price: 9800, new_price: 9500, category: "men", description: "Elegant simplicity." },
    { name: "Audemars Piguet Royal Oak", image: "men/audemars_piguet_royal_oak.webp", old_price: 10800, new_price: 10500, category: "men", description: "Luxury sports watch." },
    { name: "Omega Speedmaster", image: "men/omega_speedmaster.webp", old_price: 5000, new_price: 4800, category: "men", description: "First watch on the moon." },
    { name: "Breitling Navitimer", image: "men/breitling_navitimer.webp", old_price: 6500, new_price: 6200, category: "men", description: "Pilot's trusted companion." },

    // WOMEN'S WATCHES
    { name: "Casio G-Shock", image: "women/casio_g_shock.avif", old_price: 1400, new_price: 1200, category: "women", description: "Tough and stylish." },
    { name: "Fossil Hybrid HR", image: "women/fossil_hybrid_hr.webp", old_price: 1800, new_price: 1600, category: "women", description: "Smart and elegant." },
    { name: "Seiko 5", image: "women/seiko_5.webp", old_price: 1600, new_price: 1400, category: "women", description: "Classic reliability." },
    { name: "Citizen Eco Drive", image: "women/citizen_eco_drive.jpg", old_price: 2200, new_price: 2000, category: "women", description: "Powered by light." },
    { name: "Timex Weekender", image: "women/timex_weekender.jpg", old_price: 1300, new_price: 1100, category: "women", description: "Casual and cute." },
    { name: "Michael Kors Parker", image: "women/michael_kors_parker.webp", old_price: 2500, new_price: 2300, category: "women", description: "Fashion-forward." },
    { name: "Garmin Fenix 6", image: "women/garmin_fenix_6.webp", old_price: 3500, new_price: 3200, category: "women", description: "Adventure ready." },
    { name: "Apple Watch Series 6", image: "women/apple_watch_series_6.webp", old_price: 4300, new_price: 4000, category: "women", description: "Smart and sleek." },
    { name: "Samsung Galaxy Watch 3", image: "women/samsung_galaxy_watch_3.webp", old_price: 4000, new_price: 3800, category: "women", description: "Elegant smartwatch." },
    { name: "Fitbit Charge 4", image: "women/fitbit_charge_4.webp", old_price: 1700, new_price: 1500, category: "women", description: "Track your fitness." },
    { name: "Huawei Watch GT 2 Pro", image: "women/huawei_watch_gt_2_pro.jpg", old_price: 3100, new_price: 2900, category: "women", description: "Premium features." },
    { name: "Fossil Hybrid HR Smartwatch", image: "women/fossil_hybrid_hr_smartwatch.jpg", old_price: 1900, new_price: 1700, category: "women", description: "Elegant hybrid." }
  ];

  try {
    for (let product of products) {
      await db.execute(
        `INSERT INTO products (name, image, old_price, new_price, category, description)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [product.name, product.image, product.old_price, product.new_price, product.category, product.description]
      );
    }
    console.log('✅ Products seeded successfully!');
  } catch (error) {
    console.error('❌ Error seeding products:', error.message);
  } finally {
    process.exit();
  }
};

seedProducts();

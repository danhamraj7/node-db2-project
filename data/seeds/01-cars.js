exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: "2T2BZMCA6GC053629",
          make: "Lexus",
          model: "RX 350",
          mileage: "83,049",
          transmission: "auto",
          title: "clean",
        },
        {
          VIN: "JM3TCBEY4H0131126",
          make: "Mazda",
          model: "CX 9",
          mileage: "17,680",
          transmission: "auto",
          title: "clean",
        },
        {
          VIN: "1FM5K8D81JGA12502",
          make: "Ford",
          model: "Explorer",
          mileage: "73,749",
          transmission: "auto",
          title: "salvage",
        },
        {
          VIN: "WAUM2AFR1GA046185",
          make: "Audi",
          model: "A 5",
          mileage: "40,345",
          transmission: "auto",
          title: "clean",
        },
        {
          VIN: "JA3AH86C96U047900",
          make: "Mitsubishi Lancer",
          model: "Evolution IX",
          mileage: "75,173",
          transmission: " 5-Speed Manual",
          title: "clean",
        },
        {
          VIN: " WDD3G4EB2KW005488",
          make: "Mercedes-Benz",
          model: "A 220",
          mileage: "4,360",
          transmission: "7-Speed Automatic with Auto-Shift",
          title: "clean",
        },
        {
          VIN: "SCBBP93W49C059706",
          make: "Bentley",
          model: "Continental Flying Spur",
          mileage: "48,905",
          transmission: "6-Speed Automatic",
          title: "clean",
        },
      ]);
    });
};

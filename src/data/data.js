import Single_standard from "../images/rooms/single-standard.jpeg";
import Single_superior from "../images/rooms/single-superior.jpeg";
import Single_deluxe from "../images/rooms/single-deluxe.jpeg";
import Single_apartment from "../images/rooms/single-apartment.png";
import Double_standard from "../images/rooms/double-standard.jpeg";
import Double_superior from "../images/rooms/double-superior.jpeg";
import Double_deluxe from "../images/rooms/double-deluxe.jpeg";
import Double_apartment from "../images/rooms/double-apartment.jpeg";
import Family_standard from "../images/rooms/family-standard.jpeg";
import Family_superior from "../images/rooms/family-superior.jpeg";
import Family_deluxe from "../images/rooms/family-deluxe.jpg";
import Family_apartment from "../images/rooms/family-apartment.jpeg";
import Presidential from "../images/rooms/presidential.jpeg";

const data = [
  {
    sys: {
      id: "1",
    },
    fields: {
      name: "Standard Egyágyas",
      slug: "single-standard",
      type: "Egyágyas",
      price: 1999,
      size: 60,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Single_standard,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "2",
    },
    fields: {
      name: "Superior Egyágyas",
      slug: "single-superior",
      type: "Egyágyas",
      price: 2399,
      size: 80,
      capacity: 1,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Single_superior,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "3",
    },
    fields: {
      name: "Deluxe Egyágyas",
      slug: "single-deluxe",
      type: "Egyágyas",
      price: 2899,
      size: 100,
      capacity: 1,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Single_deluxe,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "4",
    },
    fields: {
      name: "Egyágyas Lakosztály",
      slug: "single-apartment",
      type: "Egyágyas",
      price: 3499,
      size: 120,
      capacity: 1,
      pets: true,
      breakfast: true,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Single_apartment,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "5",
    },
    fields: {
      name: "Standard Kétágyas",
      slug: "double-standard",
      type: "Kétágyas",
      price: 2499,
      size: 70,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Double_standard,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "6",
    },
    fields: {
      name: "Superior Kétágyas",
      slug: "double-superior",
      type: "Kétágyas",
      price: 2899,
      size: 80,
      capacity: 2,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Double_superior,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "7",
    },
    fields: {
      name: "Deluxe Kétágyas",
      slug: "double-deluxe",
      type: "Kétágyas",
      price: 3399,
      size: 100,
      capacity: 2,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Double_deluxe,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "8",
    },
    fields: {
      name: "Kétágyas Lakosztály",
      slug: "double-apartment",
      type: "Kétágyas",
      price: 3999,
      size: 130,
      capacity: 2,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Double_apartment,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "9",
    },
    fields: {
      name: "Standard Családi",
      slug: "family-standard",
      type: "Családi",
      price: 2999,
      size: 80,
      capacity: 3,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Family_standard,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "10",
    },
    fields: {
      name: "Superior Családi",
      slug: "family-superior",
      type: "Családi",
      price: 3399,
      size: 100,
      capacity: 4,
      pets: false,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Family_superior,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "11",
    },
    fields: {
      name: "Deluxe Családi",
      slug: "family-deluxe",
      type: "Családi",
      price: 3899,
      size: 130,
      capacity: 5,
      pets: true,
      breakfast: false,
      featured: false,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Family_deluxe,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "12",
    },
    fields: {
      name: "Családi Lakosztály",
      slug: "family-apartment",
      type: "Családi",
      price: 4499,
      size: 160,
      capacity: 6,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Family_apartment,
            },
          },
        },
      ],
    },
  },
  {
    sys: {
      id: "13",
    },
    fields: {
      name: "Elnöki",
      slug: "presidential-room",
      type: "Elnöki",
      price: 5499,
      size: 200,
      capacity: 10,
      pets: true,
      breakfast: true,
      featured: true,
      description:
        "Street art edison bulb gluten-free, tofu try-hard lumbersexual brooklyn tattooed pickled chambray. Actually humblebrag next level, deep v art party wolf tofu direct trade readymade sustainable hell of banjo. Organic authentic subway tile cliche palo santo, street art XOXO dreamcatcher retro sriracha portland air plant kitsch stumptown. Austin small batch squid gastropub. Pabst pug tumblr gochujang offal retro cloud bread bushwick semiotics before they sold out sartorial literally mlkshk. Vaporware hashtag vice, sartorial before they sold out pok pok health goth trust fund cray.",
      extras: [
        "Plush pillows and breathable bed linens",
        "Soft, oversized bath towels",
        "Full-sized, pH-balanced toiletries",
        "Complimentary refreshments",
        "Adequate safety/security",
        "Internet",
        "Comfortable beds",
      ],
      images: [
        {
          fields: {
            file: {
              url: Presidential,
            },
          },
        },
      ],
    },
  },
];

export default data;

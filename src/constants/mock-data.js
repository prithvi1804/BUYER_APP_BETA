
export const PRODUCTS = [
  {
    id: "product-electronics-1",
    local_id: "elec-1",
    bpp_details: {
      bpp_id: "tech-paradise-bpp",
      bpp_uri: "https://tech-paradise.com/ondc"
    },
    context: {
      domain: "ONDC:RET14",
      city: "std:080",
      bpp_uri: "https://tech-paradise.com/ondc"
    },
    descriptor: {
      name: "iPhone 15 Pro",
      short_desc: "Apple's latest flagship smartphone with Titanium design",
      long_desc: "The iPhone 15 Pro features a strong and lightweight aerospace-grade titanium design with contoured edges. It also includes an Action button, powerful camera upgrades, and A17 Pro for next-level performance and mobile gaming.",
      images: [
        "https://images.unsplash.com/photo-1696446701796-da61225697cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      ],
      symbol: "https://images.unsplash.com/photo-1696446701796-da61225697cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    price: {
      value: "134900",
      currency: "INR",
      maximum_value: "144900"
    },
    provider_details: {
      id: "brand-electronics-1",
      descriptor: {
        name: "Tech Paradise"
      }
    },
    location_id: "loc-elec-1",
    item_details: {
      id: "product-electronics-1",
      descriptor: {
        name: "iPhone 15 Pro",
        short_desc: "Apple's latest flagship smartphone with Titanium design",
        long_desc: "The iPhone 15 Pro features a strong and lightweight aerospace-grade titanium design with contoured edges.",
        images: [
          "https://images.unsplash.com/photo-1696446701796-da61225697cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        ],
        symbol: "https://images.unsplash.com/photo-1696446701796-da61225697cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      price: {
        value: "134900",
        currency: "INR",
        maximum_value: "144900"
      },
      quantity: {
        available: {
          count: "50"
        },
        maximum: {
          count: "5"
        }
      },
      category_id: "Smartphones",
      fulfillment_id: "f1",
      location_id: "loc-elec-1",
      tags: []
    },
    attributes: {
      "Model": "iPhone 15 Pro",
      "Storage": "256GB",
      "Color": "Natural Titanium",
      "Display": "6.1-inch Super Retina XDR"
    },
    customisation_groups: [],
    customisation_items: [],
    locations: ["loc-elec-1"],
    related_items: [],
    categories: []
  },
  {
    id: "product-electronics-2",
    local_id: "elec-2",
    bpp_details: {
      bpp_id: "tech-paradise-bpp",
      bpp_uri: "https://tech-paradise.com/ondc"
    },
    context: {
      domain: "ONDC:RET14",
      city: "std:080",
      bpp_uri: "https://tech-paradise.com/ondc"
    },
    descriptor: {
      name: "MacBook Air M2",
      short_desc: "Thinnest and lightest laptop with M2 chip",
      long_desc: "Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within its durable all-aluminum enclosure. It’s the ultraportable, ultracapable laptop that lets you work, play, or create just about anything — anywhere.",
      images: [
        "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      ],
      symbol: "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    price: {
      value: "104900",
      currency: "INR",
      maximum_value: "114900"
    },
    provider_details: {
      id: "brand-electronics-1",
      descriptor: {
        name: "Tech Paradise"
      }
    },
    location_id: "loc-elec-1",
    item_details: {
      id: "product-electronics-2",
      descriptor: {
        name: "MacBook Air M2",
        short_desc: "Thinnest and lightest laptop with M2 chip",
        images: [
          "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        ],
        symbol: "https://images.unsplash.com/photo-1611186871348-b1ec696e52c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      price: {
        value: "104900",
        currency: "INR",
        maximum_value: "114900"
      },
      quantity: {
        available: {
          count: "30"
        },
        maximum: {
          count: "2"
        }
      },
      tags: []
    },
    attributes: {
      "Chip": "Apple M2",
      "RAM": "8GB",
      "SSD": "256GB",
      "Screen": "13.6-inch Liquid Retina"
    },
    customisation_groups: [],
    customisation_items: [],
    locations: ["loc-elec-1"],
    related_items: [],
    categories: []
  },
  {
    id: "product-appliances-1",
    local_id: "app-1",
    bpp_details: {
      bpp_id: "home-essentials-bpp",
      bpp_uri: "https://home-essentials.com/ondc"
    },
    context: {
      domain: "ONDC:RET15",
      city: "std:080",
      bpp_uri: "https://home-essentials.com/ondc"
    },
    descriptor: {
      name: "Samsung 8kg Front Load",
      short_desc: "AI-powered washing machine with Steam Clean",
      long_desc: "This Samsung washing machine features AI Control that personalizes washing by remembering your habits, suggesting cycles and displaying timely information. The Ecobubble technology ensures powerful cleaning, even at low temperatures.",
      images: [
        "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      ],
      symbol: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    price: {
      value: "35000",
      currency: "INR",
      maximum_value: "39000"
    },
    provider_details: {
      id: "brand-appliances-1",
      descriptor: {
        name: "Home Essentials"
      }
    },
    location_id: "loc-app-1",
    item_details: {
      id: "product-appliances-1",
      descriptor: {
        name: "Samsung 8kg Front Load",
        short_desc: "AI-powered washing machine with Steam Clean",
        images: [
          "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
        ],
        symbol: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      },
      price: {
        value: "35000",
        currency: "INR",
        maximum_value: "39000"
      },
      quantity: {
        available: {
          count: "20"
        },
        maximum: {
          count: "1"
        }
      },
      tags: []
    },
    attributes: {
      "Capacity": "8kg",
      "Type": "Front Load",
      "Feature": "AI Control",
      "Warranty": "2 Years"
    },
    customisation_groups: [],
    customisation_items: [],
    locations: ["loc-app-1"],
    related_items: [],
    categories: []
  }
];

export const BRANDS = [
  {
    id: "brand-electronics-1",
    descriptor: {
      name: "Tech Paradise",
      short_desc: "Your ultimate tech destination",
      images: [
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      ]
    },
    domain: "ONDC:RET14" // Electronics
  },
  {
    id: "brand-appliances-1",
    descriptor: {
      name: "Home Essentials",
      short_desc: "Premium home appliances for modern living",
      images: [
        "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
      ]
    },
    domain: "ONDC:RET15" // Appliances
  }
];

export const BRAND_DETAILS = {
  "brand-electronics-1": {
    id: "brand-electronics-1",
    descriptor: {
      name: "Tech Paradise",
      images: ["https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"]
    },
    domain: "ONDC:RET14"
  },
  "brand-appliances-1": {
    id: "brand-appliances-1",
    descriptor: {
      name: "Home Essentials",
      images: ["https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"]
    },
    domain: "ONDC:RET15"
  }
};

export const OUTLETS = [
  {
    id: "loc-elec-1",
    descriptor: {
      name: "Tech Paradise - Koramangala"
    },
    address: {
      street: "Sony Signal",
      city: "Bengaluru",
      area_code: "560034"
    },
    provider_id: "brand-electronics-1"
  },
  {
    id: "loc-app-1",
    descriptor: {
      name: "Home Essentials - Indiranagar"
    },
    address: {
      street: "100ft Road",
      city: "Bengaluru",
      area_code: "560038"
    },
    provider_id: "brand-appliances-1"
  }
];

export const FILTERS = {
  categories: [
    { id: "cat-elec-1", name: "Smartphones" },
    { id: "cat-elec-2", name: "Laptops" },
    { id: "cat-app-1", name: "Washing Machines" }
  ],
  providers: [
    { id: "brand-electronics-1", name: "Tech Paradise" },
    { id: "brand-appliances-1", name: "Home Essentials" }
  ]
};

export const FILTER_VALUES = [
    { id: "val-1", code: "brand", value: "Apple" },
    { id: "val-2", code: "brand", value: "Samsung" },
    { id: "val-3", code: "color", value: "Space Gray" }
];

export const ADDRESSES = [
  {
    id: "addr-1",
    name: "Home",
    street: "123 Main St",
    city: "Bengaluru",
    state: "Karnataka",
    area_code: "560001",
    phone: "9876543210"
  }
];

export const ORDERS_MOCK = {
    orders: [],
    count: 0
}

/* Donors and CSR partners for the Donate page.
   Edit this file only. js/donation.js renders both sections from here.
   - donors: individual and institutional donors. Add a new object to `donors`
     with its own items; set `photo` to a file in assets/images/donors/ or null.
   - csr: CSR partners. Kept in a separate list, shown in its own section.
   Amounts are in rupees, as supplied. Totals are calculated from the items.
   Only add records that have been verified and approved for public display. */
window.MGGS_DONORS = {
  donors: [
    {
      id: "staff-club-mggs-anta",
      name: "Staff Club of MGGS ANTA",
      photo: "assets/images/donors/staff-club-mggs-anta.jpg",
      photoAlt: "Group photo of the Staff Club of MGGS ANTA: school staff members",
      photoW: 1200,
      photoH: 1140,
      items: [
        { item: "Inverter", amount: 20000 },
        { item: "Sound System", amount: 15000 },
        { item: "Almirahs", amount: 17000 },
        { item: "Furniture", amount: 15000 }
      ]
    },
    {
      id: "antas-native-teachers-association",
      name: "Anta's Native Teachers Association",
      photo: "assets/images/donors/donor-antas-native-teachers-association.jpg",
      photoAlt: "Members of Anta's Native Teachers Association at the event",
      items: [
        { item: "CCTV Installation", amount: 70000 },
        { item: "RO", amount: 23000 },
        { item: "Water Cooler", amount: 70000 }
      ]
    }
  ],
  csr: [
    {
      id: "western-power-barmer",
      name: "Western Power Limited, Barmer (Jindal Cement Works)",
      contribution: "Infrastructure Development",
      amount: 10000000,
      amountLabel: "₹100 Lacs (₹1 Crore)",
      items: []
    },
    {
      id: "ntpc-anta",
      name: "NTPC Anta",
      contribution: null,
      amount: null,
      amountLabel: null,
      items: [
        "Smart Classrooms and Digital Content Sets – 2",
        "Sanitary Pads Vending Machine",
        "Incinerator"
      ]
    }
  ]
};

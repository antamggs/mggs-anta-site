/* Media & Publications data: social media links and school magazine editions.
   Edit this file only. js/media.js renders both sections from here.
   - social: a link is shown only when `url` is filled in. Add YouTube, Instagram
     and other links here later (set `url` and the button appears).
   - magazines: add a new object for each new edition (newest first). `session`
     sets the download button text. `cover` may be null. `pdf` is a path in assets/docs/. */
window.MGGS_MEDIA = {
  social: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/profile.php?id=100089821814242",
      note: "Open the school's Facebook profile"
    },
    {
      platform: "YouTube",
      url: "",
      note: "Link not yet available"
    }
  ],
  magazines: [
    {
      id: "evolution-2023-24",
      title: "EVOLUTION",
      subtitle: "School Magazine",
      edition: null,
      session: "2023–24",
      publisher: null,
      cover: null,
      pdf: "assets/docs/evolution-magazine-2023-24.pdf"
    },
    {
      id: "evolution-2022-23",
      title: "EVOLUTION",
      subtitle: "School Magazine",
      edition: "First",
      session: "2022–23",
      publisher: "Mahatma Gandhi Govt. School Anta, Dist. Baran (Rajasthan)",
      cover: "assets/images/magazine/evolution-magazine-cover-2022-23.jpg",
      pdf: "assets/docs/evolution-magazine-2022-23.pdf"
    }
  ]
};

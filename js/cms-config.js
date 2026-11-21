/* Live content endpoint: public read-only Google Apps Script web app (see apps-script/SETUP.md).
   Anonymous visitors read published rows (?action=public). Admin writes use the separate
   admin deployment, which requires an approved school Google account. If this endpoint is
   unreachable or empty, every page shows its existing content. */
window.MGGS_CMS_CONFIG = {
  endpoint: "https://script.google.com/macros/s/AKfycbyAVLCe9w7pVVbrcy0GvOCgWdiKvLoGGqihjwj-Pj-dBsIxi05lAvZyeWdWjMkDlIjy-g/exec",
  // Enquiry form (POST, action "enquiry"). Left empty until the updated Apps Script deployment is live
  // and tested. While empty, the form shows "not active yet" and sends nothing.
  enquiryEndpoint: "https://script.google.com/macros/s/AKfycbyAVLCe9w7pVVbrcy0GvOCgWdiKvLoGGqihjwj-Pj-dBsIxi05lAvZyeWdWjMkDlIjy-g/exec"
};

export default {
  async fetch(request) {
    const notion = "https://broad-windshield-f43.notion.site";
    const url = new URL(request.url);

    const target = notion + "/Aeroware-tech-51d4a7a25583490aa4ac3a1389cc255e" + url.pathname + url.search;

    const response = await fetch(target, {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "*/*"
      }
    });

    return new Response(response.body, response);
  }
};

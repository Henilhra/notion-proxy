export default {
  async fetch(request) {
    const notion = "https://broad-windshield-f43.notion.site/Aeroware-tech-51d4a7a25583490aa4ac3a1389cc255e";
    const url = new URL(request.url);

    const response = await fetch(notion + url.pathname, {
      headers: request.headers
    });

    return new Response(response.body, response);
  }
};

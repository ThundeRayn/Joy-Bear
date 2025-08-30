import {createClient} from "@sanity/client";

const sanityClient = createClient({
  projectId: "6fcq1iw8",
  dataset: "production",
  apiVersion: "2025-08-29",
  useCdn: true,
});

export default sanityClient;

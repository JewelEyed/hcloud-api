import { HCloudClient, listServers } from "../dist/index.js";
import { config } from "dotenv";
import { expect, test } from "bun:test";
test("Client creation", async () => {1
  config();
  const client = HCloudClient(process.env.HCLOUD_API_KEY || "");
  expect(client)
  const { data, error } = await client.listServers<false>({
    query: {
      page: 1,
      per_page: 10
    }
  })
  const serversArray = data?.servers;
  expect(Array.isArray(serversArray)).toBe(true);
  console.log(`Found ${serversArray?.length} server(s): ${serversArray.map((server) => {
    return server.name
  }).join(", ")}`)
});

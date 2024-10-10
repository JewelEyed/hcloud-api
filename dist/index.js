/**
 * The client is all autogenerated using Hey-API's TypeScript Codegen.
 * OpenAPI spec is provided by the unoficial types by Maximilian Köstler.
 * https://github.com/MaximilianKoestler/hcloud-openapi
 */
import { client } from './client/services.gen.js';
import * as clientGenerated from './client/index.js';
/**
 * Create a instance of the client.
 * @param apiKey API Key
 * @param baseURL HCloud API Base URL
 * @returns Hey-API Client
 */
export function HCloudClient(apiKey, baseURL = "https://api.hetzner.cloud/v1") {
    client.setConfig({
        baseUrl: baseURL,
        headers: {
            "Authorization": `Bearer ${apiKey}`
        }
    });
    return { ...clientGenerated };
}
export * from './client/index.js';

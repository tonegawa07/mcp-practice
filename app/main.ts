import { server } from "./server.ts";
import { StdioServerTransport } from "npm:@modelcontextprotocol/sdk/server/stdio.js";

const transport = new StdioServerTransport();
await server.connect(transport);

console.log('MCP Server running on stdio');

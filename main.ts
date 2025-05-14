import { server } from "./server.ts";
import { StdioServerTransport } from "npm:@modelcontextprotocol/sdk/server/stdio.js";

const transport = new StdioServerTransport();
await server.connect(transport);

console.log('UUID Generator MCP Server running on stdio');

import { McpServer } from "npm:@modelcontextprotocol/sdk/server/mcp.js";

const server = new McpServer({
  name: 'uuid-generator',
  version: '1.0.0',
});

server.tool('generate_uuid', 'Generate a UUID.', {}, async () => {
  const uuid = crypto.randomUUID();

  return {
    content: [
      {
        type: 'text',
        text: `Generated UUID: ${uuid}`,
      },
    ],
  };
});

export { server };

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

server.tool('meaning_of_built', 'The meaning of BuiLT (LT)', {}, async () => {
  return {
    content: [
      {
        type: 'text',
        text: `The meaning of BuiLT (LT) is "Beyond Usual Ideas in Lightning Talk"`,
      },
    ],
  };
});

server.tool('obfuscatable', 'obfuscatable', {}, async () => {
  const response = await fetch('http://ruby:4567');
  const data = await response.json();

  return {
    content: [
      {
        type: 'text',
        text: data.message,
      },
    ],
  };
});

export { server };

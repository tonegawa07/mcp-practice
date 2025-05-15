import { McpServer } from "npm:@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "npm:zod";

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

server.tool(
  'to_param',
  'Make your ActiveRecord ids non-obvious (to_param)',
  {
    id: z.number(),
  },
  async ({ id }) => {
    const response = await fetch(`http://ruby:4567/to_param/${id}`);
    const data = await response.json();

    return {
      content: [
        {
          type: 'text',
          text: data.obfuscated_id,
        },
      ],
    };
  },
);

server.tool(
  'deobfuscatable',
  'Deobfuscate your ActiveRecord ids (deobfuscatable)',
  {
    id: z.number(),
  },
  async ({ id }) => {
    const response = await fetch(`http://ruby:4567/deobfuscatable/${id}`);
    const data = await response.json();

    return {
      content: [
        {
          type: 'text',
          text: data.deobfuscatable_id,
        },
      ],
    };
  },
);

export { server };

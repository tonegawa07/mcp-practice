# MCP Practice

## Usage

```bash
docker compose up
```

## Tools

- `generate_uuid`: Generate a UUID.
- `meaning_of_built`: The meaning of BuiLT (LT).
- `to_param`: Make your ActiveRecord ids non-obvious (to_param).
- `deobfuscatable`: Make your ActiveRecord ids obvious (deobfuscatable).

## MCP Client

```json
{
  "mcpServers": {
    "mcp-practice": {
      "command": "docker",
      "args": [
        "compose",
        "-f",
        "path/to/compose.yaml",
        "exec",
        "app",
        "deno",
        "run",
        "-A",
        "main.ts"
      ],
      "transportType": "stdio"
    }
  }
}
```

# MCP UUID Generator

## Overview

This is a MCP server that generates UUIDs.

## Usage

```bash
docker compose up
```

## Tools

- `generate_uuid`: Generate a UUID.

## MCP Client

```json
{
  "mcpServers": {
    "uuid-generator": {
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

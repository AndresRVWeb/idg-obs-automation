---
name: "cli-anything-obs-studio"
description: >-
  Command-line interface for OBS Studio - A stateful command-line interface for OBS Studio scene collection editing, following the same patterns as the Blender CLI harness. Uses a JSON scene collection format. No OBS installation required for editing.
---

# cli-anything-obs_studio

A stateful command-line interface for OBS Studio scene collection editing, following the same patterns as the Blender CLI harness. Uses a JSON scene collection format. No OBS installation required for editing.

## Installation

This CLI is installed as part of the `cli-anything-obs_studio` package:

```bash
pip install cli-anything-obs_studio
```

**Prerequisites:**
- Python 3.10+
- OBS Studio must be installed on your system

## Usage

### Basic Commands

```bash
# Show help
cli-anything-obs_studio --help

# Start interactive REPL mode
cli-anything-obs_studio

# Create a new project
cli-anything-obs_studio project new -o project.json

# Run with JSON output (for agent consumption)
cli-anything-obs_studio --json project info -p project.json
```

### REPL Mode

When invoked without a subcommand, the CLI enters an interactive REPL session:

```bash
cli-anything-obs_studio
# Enter commands interactively with tab-completion and history
```

## Command Groups

### Project

Project management commands.

| Command | Description |
|---------|-------------|
| `new` | Create a new OBS scene collection |
| `open` | Open an existing project |
| `save` | Save the current project |
| `info` | Show project information |
| `json` | Print raw project JSON |

### Scene Group

Scene management commands.

| Command | Description |
|---------|-------------|
| `add` | Add a new scene |
| `remove` | Remove a scene by index |
| `duplicate` | Duplicate a scene |
| `set-active` | Set the active scene |
| `list` | List all scenes |

### Source Group

Source management commands.

| Command | Description |
|---------|-------------|
| `add` | Add a new source to a scene |
| `remove` | Remove a source by index |
| `duplicate` | Duplicate an existing source |
| `set` | Modify source properties (name, visibility, lock status, opacity, rotation) |
| `transform` | Adjust source positioning, size, cropping, and rotation |
| `list` | List all sources in a scene |

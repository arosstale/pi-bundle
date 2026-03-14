# pi-bundle

The essential Pi extension bundle by artale. **One install, 10 best extensions.**

[![npm](https://img.shields.io/npm/v/@artale/pi-bundle?style=flat-square)](https://www.npmjs.com/package/@artale/pi-bundle)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

## Install

```bash
pi install npm:@artale/pi-bundle
```

**That's it.** You get 10 extensions in one command.

## What's included

| Extension | What it does | Command |
|-----------|-------------|---------|
| **pi-compact** | Smart context compaction (3 strategies) | `/compact` |
| **pi-lean** | Auto-truncate verbose bash/npm output | `/lean` |
| **pi-rewind** | Auto-checkpoint before edits, undo | `/rewind` |
| **pi-tokens** | Token cost tracking per tool | `/tokens` |
| **pi-memory** | Persistent MEMORY.md per project | `/memory` |
| **pi-watch** | File watcher with #pi! comments | `/watch` |
| **pi-procs** | Background processes + mprocs TUI | `/procs` |
| **pi-caffeinate** | Keep machine awake | auto |
| **pi-stash** | Save/restore prompt drafts | `/stash` |
| **pi-context** | Context window usage + warnings | `/context` |

## Why

Because installing 10 extensions one by one is tedious.

```bash
# Without pi-bundle (10 commands):
pi install npm:@artale/pi-compact
pi install npm:@artale/pi-lean
pi install npm:@artale/pi-rewind
pi install npm:@artale/pi-tokens
pi install npm:@artale/pi-memory
pi install npm:@artale/pi-watch
pi install npm:@artale/pi-procs
pi install npm:@artale/pi-caffeinate
pi install npm:@artale/pi-stash
pi install npm:@artale/pi-context

# With pi-bundle (1 command):
pi install npm:@artale/pi-bundle
```

## After install

Run `/bundle` to see what's loaded:

```
## Artale Pi Bundle

10 extensions installed:

- pi-compact — Smart context compaction (3 strategies)
- pi-lean — Auto-truncate verbose bash/npm output
- pi-rewind — Auto-checkpoint before edits, /rewind to undo
- pi-tokens — Real-time token usage per message and tool
- pi-memory — Persistent MEMORY.md per project + episodes
- pi-watch — File watcher with #pi! comments
- pi-procs — Background processes + mprocs TUI handoff
- pi-caffeinate — Keep machine awake during sessions
- pi-stash — Save/restore prompt drafts
- pi-context — Context window usage + auto-warnings
```

## Want more?

The bundle gives you the essentials. For specialized tools:

```bash
pi install npm:@artale/pi-evolve    # evolutionary self-improvement
pi install npm:@artale/pi-loop      # [D]/[N] pipeline loops
pi install npm:@artale/pi-dash      # live TUI dashboard widget
pi install npm:@artale/pi-odu       # 256-state binary pattern engine
```

## All by artale

87 packages on npm. All open source. All zero dependencies. MIT licensed.

Browse: [npmjs.com/~artale](https://www.npmjs.com/~artale) | [github.com/arosstale](https://github.com/arosstale)

## License

MIT

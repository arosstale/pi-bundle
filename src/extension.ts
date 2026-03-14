/**
 * pi-bundle — The essential Pi extension bundle by artale
 *
 * One install, 10 best extensions:
 *   pi-compact     — smart context compaction
 *   pi-lean        — truncate verbose output
 *   pi-rewind      — auto-checkpoint + undo
 *   pi-tokens      — real-time token tracking
 *   pi-memory      — persistent project memory
 *   pi-watch       — #pi! file watcher
 *   pi-procs       — background process manager
 *   pi-caffeinate  — keep machine awake
 *   pi-stash       — git stash for prompts
 *   pi-context     — context window warnings
 *
 * This extension itself just provides /bundle info.
 * The actual extensions are installed as dependencies.
 */
import type { ExtensionAPI } from '@anthropic-ai/claude-code'

const EXTENSIONS = [
  { name: 'pi-compact', desc: 'Smart context compaction (3 strategies)' },
  { name: 'pi-lean', desc: 'Auto-truncate verbose bash/npm output' },
  { name: 'pi-rewind', desc: 'Auto-checkpoint before edits, /rewind to undo' },
  { name: 'pi-tokens', desc: 'Real-time token usage per message and tool' },
  { name: 'pi-memory', desc: 'Persistent MEMORY.md per project + episodes' },
  { name: 'pi-watch', desc: 'File watcher with #pi! comments' },
  { name: 'pi-procs', desc: 'Background processes + mprocs TUI handoff' },
  { name: 'pi-caffeinate', desc: 'Keep machine awake during sessions' },
  { name: 'pi-stash', desc: 'Save/restore prompt drafts' },
  { name: 'pi-context', desc: 'Context window usage + auto-warnings' },
]

export default function init(pi: ExtensionAPI) {
  pi.addCommand({
    name: 'bundle',
    description: 'Show installed bundle extensions',
    handler: async () => {
      const lines = [
        '## Artale Pi Bundle',
        '',
        `**${EXTENSIONS.length} extensions installed:**`,
        '',
        ...EXTENSIONS.map(e => `- **${e.name}** — ${e.desc}`),
        '',
        'All by [@artale](https://github.com/arosstale). Zero external deps. MIT licensed.',
      ]
      pi.sendMessage({ content: lines.join('\n'), display: true }, { triggerTurn: false })
    },
  })
}

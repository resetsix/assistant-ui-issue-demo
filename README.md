## assistant-ui issue demo

This is a demo of the issue with assistant-ui.

## start

```bash
pnpm install
pnpm run dev
```

Visit http://localhost:5173 to see the result

## issue

Modify the remarkPlugins or rehypePlugins in `src/components/assistant-ui/markdown-text.tsx` and you'll discover the issue, whether importing just one or both

The key issue is in the MarkdownTextImpl component

## issue link

[How to support mermaid? #1954](https://github.com/assistant-ui/assistant-ui/issues/1954)

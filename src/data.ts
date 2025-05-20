export const data = `

## Markdown Support

> I'am fine.

\`\`\`ts
const a = 1
const b = 2
const c = a + b

function sum(a, b) {
  return a + b
}

console.log(sum(a, b))
\`\`\`

## Math Support

I can also render mathematical formulas:

$$
f(x) = \\int_{-\\infty}^{\\infty} \\hat{f}(\\xi) e^{2\\pi i \\xi x} d\\xi
$$

## Mermaid Support

\`\`\`mermaid
graph TD
  A[User Input] --> B[AI Processing]
  B --> C[Response Generation]
  C --> D[Content Display]
\`\`\`

\`\`\`mermaid
graph TD
    A[Frontend Components] --> B[Runtime]
    B --> D[External Providers or LLM APIs]
    
    
    classDef default color:#f8fafc,text-align:center
    
    style A fill:#e879f9,stroke:#2e1065,stroke-width:2px,color:#2e1065,font-weight:bold
    style B fill:#93c5fd,stroke:#1e3a8a,stroke-width:2px,color:#1e3a8a,font-weight:bold
    style D fill:#fca5a5,stroke:#7f1d1d,stroke-width:2px,color:#7f1d1d,font-weight:bold
    
    class A,B,C,D,E default
\`\`\`

Thank you for your attention!
`

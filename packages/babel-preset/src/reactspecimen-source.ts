// From package "strip-indent"
const stripIndent = (str: string): string => {
  const match = str.match(/^[ \t]*(?=\S)/gm);

  if (!match) {
    return str;
  }

  const indent = Math.min(...match.map(x => x.length));
  const re = new RegExp(`^[ \\t]{${indent}}`, "gm");

  return indent > 0 ? str.replace(re, "") : str;
};

export default function({ types: t }: { types: any }) {
  return {
    visitor: {
      JSXElement(path: any, state: any) {
        if (path.node.openingElement.name.name === "ReactSpecimen") {
          if (path.node.openingElement.selfClosing) {
            return;
          }

          const attributes = path.node.openingElement.attributes;

          for (let i = 0; i < attributes.length; i++) {
            const name = attributes[i].name;
            if (name && name.name === "sourceText") {
              // The sourceText attibute already exists
              return;
            }
          }

          const sourceText = state.file.code.substring(
            path.node.openingElement.end,
            path.node.closingElement.start
          );

          path.replaceWith(
            t.jSXElement(
              t.jSXOpeningElement(
                path.node.openingElement.name,
                [
                  ...path.node.openingElement.attributes,
                  t.jSXAttribute(
                    t.jSXIdentifier("sourceText"),
                    t.jSXExpressionContainer(
                      t.stringLiteral(stripIndent(sourceText).trim())
                    )
                  )
                ],
                false
              ),
              path.node.closingElement,
              path.node.children,
              false
            )
          );
        }
      }
    }
  };
}

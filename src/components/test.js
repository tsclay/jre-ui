import prettier from "prettier/standalone";
import parserJson from "prettier/parser-yaml";

export const highlightJSON = (codeString) => {
  const findBraces = /[^a-z\s":#\d\[\],\-\.'_\\\/&]/gi
  const findKeys = /"[a-z].*(?=(: |:\n))/gi
  const findBrackets = /[^a-z\s":#\d\{\},\-\.'_\\\/&]/gis
  const findCommas = /[^a-z\s":#\d\{\}\[\]\-\.'_\\\/&]/gis
  const findNumbers = /\d+./gis
  const findStrings = /(["'])(?:(?=(\\?))\2.)*?\1/gis

  const prettied = prettier.format(JSON.stringify(codeString), {parser: 'yaml', plugins: [parserJson], printWidth: 80, tabWidth: 2, proseWrap: "always"})

  const c = codeString

  let bits = c.match(findBraces)
  console.log(bits)
  // let newString = c.replace(findBraces, "<span class=braces>")
}

highlightJSON({
  "guests": ["Ali Macofsky"],
  "title": "#1526 - Ali Macofsky",
  "episode_id": 1526,
  "isMMA": false,
  "isFC": false,
  "description":
    'Ali Macofsky is an actress, writer, and standup comedian. Checkout her podcast \"Resting Bitch\" available on Apple Podcasts.',
  "date": "2020-08-15T04:00:00.000Z",
})

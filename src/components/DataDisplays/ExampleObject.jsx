import React, {useEffect, useState} from 'react';
import prettier from "prettier/standalone";
import parserJson from "prettier/parser-babel";
import Highlight, { defaultProps} from 'prism-react-renderer'
import styled from 'styled-components'
import theme from "prism-react-renderer/themes/nightOwl";

const ExampleObject = () => {
  const [episodes, setEpisodes] = useState([])

  const fetchEpisodes = async () => {
    const response = await fetch('/api/v1/example')
    const data = await response.json()
    setEpisodes(data)
  }

  useEffect(() => {
    fetchEpisodes()
    console.log('fetched episodes')
  }
 , [])

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  overflow: scroll;
  width: 75%;
`;

const Line = styled.div`
  display: table-row;
`;

const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

const LineContent = styled.span`
  display: table-cell;
`;

  return (
    <div className="App">
      <p>Returned data will look like this</p>
      {episodes.map(e => (
         <Highlight {...defaultProps} theme={theme} code={prettier.format(JSON.stringify(e), {parser: 'json', plugins: [parserJson], printWidth: 90}).trim()} language="json">
         {({ className, style, tokens, getLineProps, getTokenProps }) => (
           <Pre className={className} style={style}>
             {tokens.map((line, i) => (
               <Line key={i} {...getLineProps({ line, key: i })}>
                 <LineNo>{i + 1}</LineNo>
                 <LineContent>
                   {line.map((token, key) => (
                     <span key={key} {...getTokenProps({ token, key })} />
                   ))}
                 </LineContent>
               </Line>
             ))}
           </Pre>
         )}
       </Highlight>
      ))}
    </div>
  );
}

export default ExampleObject;


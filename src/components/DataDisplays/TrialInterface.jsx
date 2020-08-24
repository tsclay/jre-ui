import React, {useState} from 'react';
import prettier from "prettier/standalone";
import parserJson from "prettier/parser-babel";
import Highlight, { defaultProps} from 'prism-react-renderer'
import styled from 'styled-components'
import theme from "prism-react-renderer/themes/nightOwl";

const TrialInterface = () => {
  const [episodes, setEpisodes] = useState([])
  const [input, setInput] = useState('/api/v1/example')

  const fetchEpisodes = async (url = '/api/v1/example') => {
    const response = await fetch(url)
    const data = await response.json()
    setEpisodes(data)
  }

  const getQueriedData = async (e) => {
    await e.preventDefault()
    await fetchEpisodes(input)
  }
  

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
      <h3>Try it out!</h3>
      <form onSubmit={getQueriedData}>
        <input type="text" onChange={(e) => {
          setInput(e.target.value)
        }
        } defaultValue={input}/>
        <button type="submit">Fetch!</button>
      </form>
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

export default TrialInterface;


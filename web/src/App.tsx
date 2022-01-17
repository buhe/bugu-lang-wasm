import React from 'react';
import {useCrate, useTakeEffect} from './utils/hooks';
// import logo from './logo.svg';
import './App.css';
import CodeEditor from '@uiw/react-textarea-code-editor';

const App: React.FC = () => {
  const mod = useCrate();
  const [response, setResponse] = React.useState();
  const [code, setCode] = React.useState(
    `int add(int a, int b) {\n  return a + b;\n}`
  );

  useTakeEffect(() => {
    const resp = mod.compile(code);
    setResponse(resp);
  }, [mod]);

  return (
    <div className="App">
      <CodeEditor
        value={code}
        language="c"
        placeholder="Please enter bugu lang code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          margin: 12,
          fontSize: 12,
          width: 44 * 16,
          height: 44 * 12,
          backgroundColor: "#f5f5f5",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
      <div style={{
        margin: 12,
      }}>
        <button onClick={() => {
          const resp = mod.compile(code);
          setResponse(resp);
        }}>compile</button>
      </div>
      <CodeEditor
        value={response}
        language="asm"
        // placeholder="Please enter JS code."
        padding={15}
        style={{
          margin: 12,
          fontSize: 12,
          width: 44 * 16,
          height: 44 * 12,
          backgroundColor: "#f5f5ff",
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
      />
    </div>
  );
};

export default App;

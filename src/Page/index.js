import React, { useState } from 'react';
import { basicUsage, defSpan, spanAuto, spanMix, col14, col5, colFibo, gutterTest, respon1, respon2, respon3a, respon3b } from './snippets';

import Grid from '../lib/Grid';
import { BS3 as col } from '../lib/Grid/helpers/breakpoint';
const { Row, Col } = Grid;

const Page = () => {
  const [testGutter, setGutter] = useState(8);
  const [testOuterGutter, setOuterGutter] = useState(8);

  const handleInput = e => {
    switch(e.target.name){
      case 'testGutter': {
        setGutter(e.target.value);
        break;
      }
      default:{
        setOuterGutter(e.target.value);
      }
    }
  }

  const cardStyle = {
    padding: 8,
    backgroundColor: '#e0e0e0',
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 12,
    height: '100%',
    boxSizing: 'border-box',
  };

  const content = (text = 'Sample Column') => <div style={cardStyle}>{text}</div>;

  return (
    <Row outerGutter={16}>
      <Col>
        <h1>Grid System</h1>
        <Row gutter={16} align="center">
          <Col><h3>Flexible Columns - Mobile-first Flexbox Grid System</h3></Col>
          <Col span="auto">
            <a href="https://github.com/andywihalim2/react-grid">Visit Github repo</a>
          </Col>
        </Row>

        <h2>Basic Usage (Equal Grid)</h2>
        <Row align="start">
          <Col>{content('Col')}</Col>
          <Col>{content('Col')}</Col>
          <Col>{content('Col')}</Col>
        </Row>
        <Row align="start">
          <Col>{content('Col')}</Col>
          <Col>{content('Col')}</Col>
        </Row>
        <pre>{basicUsage}</pre>

        <h2>Defining Column Span</h2>
        <Row align="start">
          <Col span={12}>{content('Col-12')}</Col>
          <Col span={6}>{content('Col-6')}</Col>
          <Col span={6}>{content('Col-6')}</Col>
          <Col span={4}>{content('Col-4')}</Col>
          <Col span={4}>{content('Col-4')}</Col>
          <Col span={4}>{content('Col-4')}</Col>
        </Row>
        <pre>{defSpan}</pre>

        <h2>Auto Column Width</h2>
        <Row align="start">
          <Col span="auto">{content('Col-auto')}</Col>
          <Col span="auto">{content('Col-auto')}</Col>
          <Col>{content('Col')}</Col>
        </Row>
        <pre>{spanAuto}</pre>

        <h2>Mix Example</h2>
        <Row align="start">
          <Col span={7}>{content('Col-7')}</Col>
          <Col span="auto">{content('Col-auto')}</Col>
          <Col>{content('Col')}</Col>
          <Col span={12}>{content('Col-12')}</Col>
          <Col span={8}>{content('Col-8')}</Col>
          <Col>{content('Col')}</Col>
        </Row>
        <pre>{spanMix}</pre>

        <h2>Custom Column Count</h2>
        <h5>Example: 14 Grids System</h5>
        <Row align="start" maxCol={14}>
          <Col span={2}>{content('Col-2')}</Col>
          <Col span={2}>{content('Col-2')}</Col>
          <Col span={2}>{content('Col-2')}</Col>
          <Col span={2}>{content('Col-2')}</Col>
          <Col span={2}>{content('Col-2')}</Col>
          <Col span={2}>{content('Col-2')}</Col>
          <Col span={2}>{content('Col-2')}</Col>
          <Col span={10}>{content('Col-10')}</Col>
          <Col span={4}>{content('Col-4')}</Col>
        </Row>
        <pre>{col14}</pre>

        <h5>Example: 5 Grids System</h5>
        <Row align="start" maxCol={5}>
          <Col span={2}>{content('Col-2')}</Col>
          <Col span={3}>{content('Col-3')}</Col>
          <Col span={1}>{content('Col-1')}</Col>
          <Col span={1}>{content('Col-1')}</Col>
          <Col span={1}>{content('Col-1')}</Col>
          <Col span={1}>{content('Col-1')}</Col>
          <Col span={1}>{content('Col-1')}</Col>
        </Row>
        <pre>{col5}</pre>

        <h5>Example: Fibonacci 13</h5>
        <Row align="start" maxCol={13}>
          <Col span={13}>{content('Col-13')}</Col>
          <Col span={8}>{content('Col-8')}</Col>
          <Col span={5}>{content('Col-5')}</Col>
          <Col span={5}>{content('Col-5')}</Col>
          <Col span={3}>{content('Col-3')}</Col>
          <Col span={2}>{content('Col-2')}</Col>
          <Col span={1}>{content('Col-1')}</Col>
          <Col span={1}>{content('Col-1')}</Col>
          <Col span={1}>{content('Col-1')}</Col>
        </Row>
        <pre>{colFibo}</pre>

        <h2>Gutter</h2>
        <Row>
          <Col span="auto" style={{marginBottom: 8}}>
            Gutter: <input name="testGutter" onChange={handleInput} style={{fontSize: 16}} type="number" min="0" max="40" value={testGutter}/>
          </Col>
          <Col span="auto" style={{marginBottom: 8}}>
            Outer Gutter: <input name="testOuterGutter" onChange={handleInput} style={{fontSize: 16}} type="number" min="0" max="40" value={testOuterGutter}/>
          </Col>
        </Row>

        <div style={{border: '1px solid #e0e0e0', paddingTop: 8}}>
          <Row gutter={testGutter} outerGutter={testOuterGutter} align="start">
            <Col>{content('Col')}</Col>
            <Col>{content('Col')}</Col>
            <Col>{content('Col')}</Col>
          </Row>
        </div>
        <pre>{gutterTest(testGutter, testOuterGutter)}</pre>

        <h2>Responsive</h2>
        <h3>Manual Breakpoint Definition</h3>
        <h5>{`Example 1: < 768 | >= 768`}</h5>
        <Row align="start">
          <Col span={[12, {scrFrom: 768, span: 6}]}>
            {content('Col-12, Col-[768]-6')}
          </Col>
          <Col span={[12, {scrFrom: 768, span: 6}]}>
            {content('Col-12, Col-[768]-6')}
          </Col>
        </Row>
        <pre>{respon1}</pre>

        <h5>{`Example 2: < 768 | >= 768 | >= 1200`}</h5>
        <Row align="start">
          <Col span={[12, {scrFrom: 768, span: 6}, {scrFrom: 1200, span: 4}]}>
            {content('Col-12, Col-[768]-6, col-[1200]-4')}
          </Col>
          <Col span={[12, {scrFrom: 768, span: 6}, {scrFrom: 1200, span: 4}]}>
            {content('Col-12, Col-[768]-6, col-[1200]-4')}
          </Col>
          <Col span={[12, {scrFrom: 1200, span: 4}]}>
            {content('Col-12, Col-[1200]-4')}
          </Col>
        </Row>
        <pre>{respon2}</pre>
        <h3>Using Helper</h3>
        <h4>Example: Based on Bootstrap 3</h4>
        <Row align="start">
          <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>
            {content('Col-12, Col-sm-6, col-md-4, col-lg-3')}
          </Col>
          <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>
            {content('Col-12, Col-sm-6, col-md-4, col-lg-3')}
          </Col>
          <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>
            {content('Col-12, Col-sm-6, col-md-4, col-lg-3')}
          </Col>
          <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>
            {content('Col-12, Col-sm-6, col-md-4, col-lg-3')}
          </Col>
        </Row>
        <h5>Import Helper</h5>
        <pre>{respon3a}</pre>
        <h5>Render</h5>
        <pre>{respon3b}</pre>
        <h5>Contributor</h5>
        <a href="https://github.com/andywihalim2">Andy Wihalim</a>
      </Col>
    </Row>
  );
}

export default Page;

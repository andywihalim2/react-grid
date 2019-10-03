export const basicUsage = `<Row>
  <Col>...</Col>
  <Col>...</Col>
  <Col>...</Col>
</Row>
<Row>
  <Col>...</Col>
  <Col>...</Col>
</Row>`;

export const defSpan = `<Row>
  <Col span={12}>...</Col>
  <Col span={6}>...</Col>
  <Col span={6}>...</Col>
  <Col span={4}>...</Col>
  <Col span={4}>...</Col>
  <Col span={4}>...</Col>
</Row>`

export const spanAuto = `<Row>
  <Col span="auto">...</Col>
  <Col span="auto">...</Col>
  <Col>...</Col>
</Row>`

export const spanMix = `<Row>
  <Col span={7}>...</Col>
  <Col span="auto">...</Col>
  <Col>...</Col>
  <Col span={12}>...</Col>
  <Col span={8}>...</Col>
  <Col>...</Col>
</Row>`

export const col14 = `<Row maxCol={14}>
  <Col span={2}>...</Col>
  <Col span={2}>...</Col>
  <Col span={2}>...</Col>
  <Col span={2}>...</Col>
  <Col span={2}>...</Col>
  <Col span={2}>...</Col>
  <Col span={2}>...</Col>
  <Col span={10}>...</Col>
  <Col span={4}>...</Col>
</Row>`

export const col5 = `<Row maxCol={5}>
  <Col span={2}>...</Col>
  <Col span={3}>...</Col>
  <Col span={1}>...</Col>
  <Col span={1}>...</Col>
  <Col span={1}>...</Col>
  <Col span={1}>...</Col>
  <Col span={1}>...</Col>
</Row>`

export const colFibo = `<Row maxCol={13}>
  <Col span={13}>...</Col>
  <Col span={8}>...</Col>
  <Col span={5}>...</Col>
  <Col span={5}>...</Col>
  <Col span={3}>...</Col>
  <Col span={2}>...</Col>
  <Col span={1}>...</Col>
  <Col span={1}>...</Col>
  <Col span={1}>...</Col>
</Row>`

export const gutterTest = (inner, outer) => `<Row gutter={${inner}} outerGutter={${outer}}>
  <Col>...</Col>
  <Col>...</Col>
  <Col>...</Col>
</Row>`

export const respon1 = `<Row>
  <Col span={[12, {scrFrom: 768, span: 6}]}>
    ...
  </Col>
  <Col span={[12, {scrFrom: 768, span: 6}]}>
    ...
  </Col>
</Row>`

export const respon2 = `<Row>
  <Col span={[12, {scrFrom: 768, span: 6}, {scrFrom: 1200, span: 4}]}>
    ...
  </Col>
  <Col span={[12, {scrFrom: 768, span: 6}, {scrFrom: 1200, span: 4}]}>
    ...
  </Col>
  <Col span={[12, {scrFrom: 1200, span: 4}]}>
    ...
  </Col>
</Row>`

export const respon3a = `import { BS3 as col } from '../lib/Grids/helper/Breakpoint';`

export const respon3b = `<Row>
  <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>
    ...
  </Col>
  <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>
    ...
  </Col>
  <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>
    ...
  </Col>
  <Col span={[col.xs(12), col.sm(6), col.md(4), col.lg(3)]}>
    ...
  </Col>
</Row>`
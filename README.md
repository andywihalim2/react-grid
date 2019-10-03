# Lite Components - Grid Documentation

## Import

```
import { Grid } from '@lite/components';
const { Row, Col } = Grid;
```

## Basic Usage (Equal Sized Column)

```
<Row>
	<Col>...</Col>
	<Col>...</Col>
	<Col>...</Col>
</Row>
```

## Defining Column Span

In default, maximum allowed column span per row is `12`. Just like _Bootstrap_ - you already know!

```
<Row>
	<Col span={12}>...</Col>
	<Col span={6}>...</Col>
	<Col span={6}>...</Col>
	<Col span={4}>...</Col>
	<Col span={4}>...</Col>
	<Col span={4}>...</Col>
</Row>
```

## Auto Column Width

Use `span="auto"` props classes to size columns based on the natural width of their content.

```
<Row>
	<Col span="auto">...</Col>
	<Col span="auto">...</Col>
	<Col>...</Col>
</Row>
```

## Mix Example

Before go any further, Hope this example will help you to understand the most-basic usage

```
<Row>
	<Col span={7}>...</Col>
	<Col span="auto">...</Col>
	<Col>...</Col>
	<Col span={12}>...</Col>
	<Col span={8}>...</Col>
	<Col>...</Col>
</Row>
```

## The Magic Begins: Custom Column Count

In default, max allowed column span per row is `12` - Just like common grid system that you already know.

But in this case, you can **fully customize** the maximum column span. Need `5`, `7`, `13` or another **absurdly odd-count & equal** columns? doesn't matter. Just add `maxCol` props in `Row` component.

### 14 Columns Example

```
<Row maxCol={14}>
	<Col span={2}>...</Col>
	<Col span={2}>...</Col>
	<Col span={2}>...</Col>
	<Col span={2}>...</Col>
	<Col span={2}>...</Col>
	<Col span={2}>...</Col>
	<Col span={2}>...</Col>
	<Col span={10}>...</Col>
	<Col span={4}>...</Col>
</Row>
```

### 5 Columns Example

```
<Row maxCol={5}>
	 <Col span={2}>...</Col>
	 <Col span={3}>...</Col>
	 <Col span={1}>...</Col>
	 <Col span={1}>...</Col>
	 <Col span={1}>...</Col>
	 <Col span={1}>...</Col>
	 <Col span={1}>...</Col>
</Row>
```

### 13 - Fibonacci Example

```
<Row maxCol={13}>
	<Col span={13}>...</Col>
	<Col span={8}>...</Col>
	<Col span={5}>...</Col>
	<Col span={5}>...</Col>
	<Col span={3}>...</Col>
	<Col span={2}>...</Col>
	<Col span={1}>...</Col>
	<Col span={1}>...</Col>
	<Col span={1}>...</Col>
</Row>
```

## Gutter & Outer Gutter

use `gutter` props in `Row` components to set space size between columns. and `outerGutter` props to set the outer space size in the row.

```
<Row gutter={8} outerGutter={16}>
	<Col>...</Col>
	<Col>...</Col>
	<Col>...</Col>
</Row>
```

## Justify and Aligning

Use `justfy` props on `Row` component to horizontally justify the contents (`Col`):

```
<Row justify="center">
	<Col span={3}>...</Col>
	<Col span={2}>...</Col>
</Row>
```

Use `align` props on `Row` component to vertically align the contents (`Col`):

```
<Row align="center">
	<Col span={3}>...</Col>
	<Col span={2}>...</Col>
</Row>
```

Use `alignSelf` props on `Col` component to vertically align the (`Col`) it self:

```
<Row>
	<Col span={3}>...</Col>
	<Col span={2} alignSelf="start">...</Col>
</Row>
```

## Responsive

Set an array into `span` props to specify the breakpoints.

- since this was created based mobile first design, all media query will be consistently use:
  `@media screen and (min-width: <scrFrom> px)`.
- _first index_ of array will be containing **number** only. it will set the default column span width from screen size 0 until the next breakpoint.
- _rest index_ of the array will be containing **objects** with 2 keys: `scrFrom` (screen from) is for the breakpoint, and `span` to set the column span width.

**example:**

```
const span = [12, {scrFrom: 768, span: 6}, {scrFrom: 992, span: 3}];
```

```
<Col span={span}>...</Col>
```

is equal to this **scss**:

```
.col{
	width: 100%;
	@media screen and (min-width: 768px){
		width: 50%;
	}
	@media screen and (min-width: 992px){
		width: 25%;
	}
}
```

- `width: 100%` is the result of `12/12 * 100%` and will be applied on screen `< 768px`;
- `width: 50%` is the result of `6/12 & 100%` and will be applied on screen `>= 768px` and `< 992px`;
- `width: 25%` is the result of `3/12 & 100%` and will be applied on screen `>= 992px`;

### Create a breakpoint rules

Here is an example how to create a reusable breakpoint rules:

```
// Based on Bootstrap 4
const col = {
	sm: (span = 0) => ({ scrFrom:  576, span }),
	md: (span = 0) => ({ scrFrom:  768, span }),
	lg: (span = 0) => ({ scrFrom:  992, span }),
	xl: (span = 0) => ({ scrFrom:  1200, span }),
};
```

```
<Row>
	<Col span={[12, col.sm(6), col.md(4), col.lg(3), col.xl(2)]}>...</Col>
</Row>
```

equals to:

```
<div class="row">
	<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">...</div>
</div>
```

## Props

`Row` components:

| props         | propType                                                   | defaultProps                                              | usage                                                                                                   |
| ------------- | ---------------------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `maxCol`      | `number`                                                   | `12`                                                      | to set maximum allowed column span in the `Row`.                                                        |
| `gutter`      | `number`                                                   | `8`                                                       | to set the spacing between children columns (`Col`).                                                    |
| `outerGutter` | `number`                                                   | `0`                                                       | to set the spacing in the outer side of the `Row`.                                                      |
| `align`       | `oneOf(['baseline', 'stretch', 'center', 'end', 'start'])` | `null` - will be set into default css value: `stretch`    | to align all `Col` in the `Row` vertically.                                                             |
| `justify`     | `oneOf(['between', 'around', 'center', 'end', 'start'])`   | `null` - will be set into default css value: `flex-start` | to justify all `Col` in the `Row` horizontally.                                                         |
| `className`   | `string`                                                   | `''`                                                      | to apply custom class (style) into `Row`. **Use it carefully!** it may replace the default style rules. |

`Col` components:

| props       | propType                                                   | defaultprops                                        | values                                         | usage                                                                                                   |
| ----------- | ---------------------------------------------------------- | --------------------------------------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `span`      | `number` or `string` or `arrayOf(object)`                  | `0`                                                 | `0`                                            | to set the column equally.                                                                              |
|             |                                                            |                                                     | `-1`                                           | to hide the `Col` - `display: none`.                                                                    |
|             |                                                            |                                                     | `1` upto `maxCol`                              | to set the column width based on `span/maxCol*100%`                                                     |
|             |                                                            |                                                     | `"auto"`                                       | to set the column width based on it's content.                                                          |
|             |                                                            |                                                     | `[12, { scrFrom: number, span: number }, ...]` | to set the column width with media query rules.                                                         |
| `alignSelf` | `oneOf(['baseline', 'stretch', 'center', 'end', 'start'])` | `null` - will be set into default css value: `auto` |                                                | to vertically align on applied `Col` only.                                                              |
| `className` | string                                                     | `''`                                                |                                                | to apply custom class (style) into `Col`. **Use it carefully!** it may replace the default style rules. |

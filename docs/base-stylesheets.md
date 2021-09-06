# Base stylesheet and mixins for all pages

## Responsive

- Screen sizes: based on Ant design screen size.

- Grid system official documents. [https://ant.design/components/grid/](https://ant.design/components/grid/).

- [Global Ant Design variables for stylesheets.](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

## Mixins

_Prefix base class with `kdn-` (Kongd NextJs - kdn)_

### Margin - padding classess

- Width ranges:

  - 0 -> 0
  - 1 -> 0.25rem
  - 2 -> 0.5rem
  - 3 -> 1rem
  - 4 -> 1.5rem
  - 5 -> 3rem

- Margin: `m[t/r/b/l]-[?sm/md/lg/xl/xxl]-[0-5]` (syntax the same with bootstrap)
  - `m[t/r/b/l]`: position with top/right/bottom/left. Ex: `<div className="kdn-mt-1"></div>`: margin top 0.25rem.
  - `[?sm/md/lg/xl/xxl]`: screen size based on Ant design screen size, ex: `kdn-mt-sm-1` is margin-top set to 0.25rem for `sm` screen. Default screen size is empty that apply for all screen sizes, ex: `kdn-mt-1`.
  - `[0-5]`: width sizes
- Padding: `p[t/r/b/l]-[sm/md/lg/xl/xxl]-[0-5]` (syntax the same with bootstrap)
- `p[t/r/b/l]`: position with top/right/bottom/left. Ex: `<div className="kdn-pt-2"></div>`: padding top 0.5rem.
- `[?sm/md/lg/xl/xxl]`: screen size based on Ant design screen size, ex: `kdn-pt-sm-1` is padding-top set to 0.25rem for `sm` screen. Default screen size is empty that apply for all screen sizes, ex: `kdn-pt-1`.
- `[0-5]`: width sizes

### Text styles classes

- Transform classess: `text-[lowercase/uppercase/capitalize]`, ex: `kdn-text-lowercase`.

- Font weight: `font-weight-[light/normal/medium/semi-bold/bold/heavy]`, ex: `kdn-font-weight-bold`.

  - Width ranges:
    - `light` -> 300
    - `normal` -> 400
    - `medium` -> 500
    - `semi-bold` -> 600
    - `bold` -> 700
    - `heavy` -> 900

- Text align: `text-[justify/left/right/center]`, ex: `kdn-text-center`.

- Text truncate: `kdn-text-truncate`.

- Letter spacing: `letter-spacing-[base/lg/xl]`, ex: `kdn-letter-spacing-lg`.
  - Width ranges:
    - `base` -> 3px
    - `lg` -> 6px
    - `xl` -> 8px

### Flexbox classes

- Display: `d-[flex/none/inline-block/block/inline-flex]`, ex: `kdn-d-flex` -> `display: flex`.

- Flex have many classes, refer below defines:

  ```css
  .kdn-flex-row {
    .flex-display(flex, row, wrap) !important;
  }

  .kdn-flex-column {
    .flex-display(flex, column, nowrap) !important;
  }

  .kdn-flex-nowrap {
    flex-wrap: nowrap !important;
  }

  .kdn-flex-row-reverse {
    flex-direction: row-reverse !important;
  }

  .kdn-flex-column-reverse {
    flex-direction: column-reverse !important;
  }

  .kdn-justify-content-start {
    .justify-content(flex-start) !important;
  }

  .kdn-justify-content-end {
    .justify-content(flex-end) !important;
  }

  .kdn-justify-content-center {
    .justify-content(center) !important;
  }

  .kdn-justify-content-between {
    .justify-content(space-between) !important;
  }

  .kdn-justify-content-around {
    .justify-content(space-around) !important;
  }

  .kdn-align-items-start {
    .align-items(flex-start) !important;
  }

  .kdn-align-items-end {
    .align-items(flex-end) !important;
  }

  .kdn-align-items-center {
    .align-items(center) !important;
  }

  .kdn-align-items-stretch {
    .align-items(stretch) !important;
  }

  .kdn-align-content-start {
    .align-content(flex-start) !important;
  }

  .kdn-align-content-end {
    .align-content(flex-end) !important;
  }

  .kdn-align-content-center {
    .align-content(center) !important;
  }

  .kdn-align-content-between {
    .align-content(space-between) !important;
  }

  .kdn-align-content-around {
    .align-content(space-around) !important;
  }

  .kdn-align-content-stretch {
    .align-content(stretch) !important;
  }

  .kdn-align-self-auto {
    .align-self(auto) !important;
  }

  .kdn-align-self-start {
    .align-self(flex-start) !important;
  }

  .kdn-align-self-end {
    .align-self(flex-end) !important;
  }

  .kdn-align-self-center {
    .align-self(center) !important;
  }

  .kdn-align-self-baseline {
    .align-self(baseline) !important;
  }

  .kdn-align-self-stretch {
    .align-self(stretch) !important;
  }

  .kdn-order-first {
    -ms-flex-order: -1;
    order: -1;
  }

  .kdn-order-1 {
    -ms-flex-order: 1;
    order: 1;
  }

  .kdn-order-2 {
    -ms-flex-order: 2;
    order: 2;
  }

  .kdn-order-3 {
    -ms-flex-order: 3;
    order: 3;
  }

  .kdn-order-4 {
    -ms-flex-order: 4;
    order: 4;
  }

  .kdn-order-5 {
    -ms-flex-order: 5;
    order: 5;
  }

  .kdn-order-6 {
    -ms-flex-order: 6;
    order: 6;
  }

  .kdn-order-7 {
    -ms-flex-order: 7;
    order: 7;
  }

  .kdn-order-8 {
    -ms-flex-order: 8;
    order: 8;
  }

  .kdn-order-9 {
    -ms-flex-order: 9;
    order: 9;
  }

  .kdn-order-10 {
    -ms-flex-order: 10;
    order: 10;
  }

  .kdn-order-11 {
    -ms-flex-order: 11;
    order: 11;
  }

  .kdn-order-12 {
    -ms-flex-order: 12;
    order: 12;
  }

  .kdn-offset-1 {
    margin-left: 8.333333%;
  }

  .kdn-offset-2 {
    margin-left: 16.666667%;
  }

  .kdn-offset-3 {
    margin-left: 25%;
  }

  .kdn-offset-4 {
    margin-left: 33.333333%;
  }

  .kdn-offset-5 {
    margin-left: 41.666667%;
  }

  .kdn-offset-6 {
    margin-left: 50%;
  }

  .kdn-offset-7 {
    margin-left: 58.333333%;
  }

  .kdn-offset-8 {
    margin-left: 66.666667%;
  }

  .kdn-offset-9 {
    margin-left: 75%;
  }

  .kdn-offset-10 {
    margin-left: 83.333333%;
  }

  .kdn-offset-11 {
    margin-left: 91.666667%;
  }

  @media screen and (min-width: @screen-sm-min) {
    .kdn-d-sm-none {
      display: none !important;
    }

    .kdn-d-sm-inline-block {
      display: inline-block !important;
    }

    .kdn-d-sm-block {
      display: block !important;
    }

    .kdn-d-sm-flex {
      display: flex !important;
    }

    .kdn-d-sm-inline-flex {
      display: inline-flex !important;
    }

    .kdn-flex-sm-row {
      flex-direction: row !important;
    }

    .kdn-flex-sm-column {
      flex-direction: column !important;
    }

    .kdn-flex-sm-row-reverse {
      flex-direction: row-reverse !important;
    }

    .kdn-flex-sm-column-reverse {
      flex-direction: column-reverse !important;
    }

    .kdn-flex-sm-wrap {
      flex-wrap: wrap !important;
    }

    .kdn-flex-sm-nowrap {
      flex-wrap: nowrap !important;
    }

    .kdn-flex-sm-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .kdn-justify-content-sm-start {
      justify-content: flex-start !important;
    }

    .kdn-justify-content-sm-end {
      justify-content: flex-end !important;
    }

    .kdn-justify-content-sm-center {
      justify-content: center !important;
    }

    .kdn-justify-content-sm-between {
      justify-content: space-between !important;
    }

    .kdn-justify-content-sm-around {
      justify-content: space-around !important;
    }

    .kdn-align-items-sm-start {
      align-items: flex-start !important;
    }

    .kdn-align-items-sm-end {
      align-items: flex-end !important;
    }

    .kdn-align-items-sm-center {
      align-items: center !important;
    }

    .kdn-align-items-sm-baseline {
      align-items: baseline !important;
    }

    .kdn-align-items-sm-stretch {
      align-items: stretch !important;
    }

    .kdn-align-content-sm-start {
      align-content: flex-start !important;
    }

    .kdn-align-content-sm-end {
      align-content: flex-end !important;
    }

    .kdn-align-content-sm-center {
      align-content: center !important;
    }

    .kdn-align-content-sm-between {
      align-content: space-between !important;
    }

    .kdn-align-content-sm-around {
      align-content: space-around !important;
    }

    .kdn-align-content-sm-stretch {
      align-content: stretch !important;
    }

    .kdn-align-self-sm-auto {
      align-self: auto !important;
    }

    .kdn-align-self-sm-start {
      align-self: flex-start !important;
    }

    .kdn-align-self-sm-end {
      align-self: flex-end !important;
    }

    .kdn-align-self-sm-center {
      align-self: center !important;
    }

    .kdn-align-self-sm-baseline {
      align-self: baseline !important;
    }

    .kdn-align-self-sm-stretch {
      align-self: stretch !important;
    }

    .kdn-order-sm-first {
      -ms-flex-order: -1;
      order: -1;
    }

    .kdn-order-sm-1 {
      -ms-flex-order: 1;
      order: 1;
    }

    .kdn-order-sm-2 {
      -ms-flex-order: 2;
      order: 2;
    }

    .kdn-order-sm-3 {
      -ms-flex-order: 3;
      order: 3;
    }

    .kdn-order-sm-4 {
      -ms-flex-order: 4;
      order: 4;
    }

    .kdn-order-sm-5 {
      -ms-flex-order: 5;
      order: 5;
    }

    .kdn-order-sm-6 {
      -ms-flex-order: 6;
      order: 6;
    }

    .kdn-order-sm-7 {
      -ms-flex-order: 7;
      order: 7;
    }

    .kdn-order-sm-8 {
      -ms-flex-order: 8;
      order: 8;
    }

    .kdn-order-sm-9 {
      -ms-flex-order: 9;
      order: 9;
    }

    .kdn-order-sm-10 {
      -ms-flex-order: 10;
      order: 10;
    }

    .kdn-order-sm-11 {
      -ms-flex-order: 11;
      order: 11;
    }

    .kdn-order-sm-12 {
      -ms-flex-order: 12;
      order: 12;
    }

    .kdn-offset-sm-0 {
      margin-left: 0;
    }

    .kdn-offset-sm-1 {
      margin-left: 8.333333%;
    }

    .kdn-offset-sm-2 {
      margin-left: 16.666667%;
    }

    .kdn-offset-sm-3 {
      margin-left: 25%;
    }

    .kdn-offset-sm-4 {
      margin-left: 33.333333%;
    }

    .kdn-offset-sm-5 {
      margin-left: 41.666667%;
    }

    .kdn-offset-sm-6 {
      margin-left: 50%;
    }

    .kdn-offset-sm-7 {
      margin-left: 58.333333%;
    }

    .kdn-offset-sm-8 {
      margin-left: 66.666667%;
    }

    .kdn-offset-sm-9 {
      margin-left: 75%;
    }

    .kdn-offset-sm-10 {
      margin-left: 83.333333%;
    }

    .kdn-offset-sm-11 {
      margin-left: 91.666667%;
    }
  }

  @media screen and (min-width: @screen-md-min) {
    .kdn-d-md-none {
      display: none !important;
    }

    .kdn-d-md-inline-block {
      display: inline-block !important;
    }

    .kdn-d-md-block {
      display: block !important;
    }

    .kdn-d-md-flex {
      display: flex !important;
    }

    .kdn-d-md-inline-flex {
      display: inline-flex !important;
    }

    .kdn-flex-md-row {
      flex-direction: row !important;
    }

    .kdn-flex-md-column {
      flex-direction: column !important;
    }

    .kdn-flex-md-row-reverse {
      flex-direction: row-reverse !important;
    }

    .kdn-flex-md-column-reverse {
      flex-direction: column-reverse !important;
    }

    .kdn-flex-md-wrap {
      flex-wrap: wrap !important;
    }

    .kdn-flex-md-nowrap {
      flex-wrap: nowrap !important;
    }

    .kdn-flex-md-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .kdn-justify-content-md-start {
      justify-content: flex-start !important;
    }

    .kdn-justify-content-md-end {
      justify-content: flex-end !important;
    }

    .kdn-justify-content-md-center {
      justify-content: center !important;
    }

    .kdn-justify-content-md-between {
      justify-content: space-between !important;
    }

    .kdn-justify-content-md-around {
      justify-content: space-around !important;
    }

    .kdn-align-items-md-start {
      align-items: flex-start !important;
    }

    .kdn-align-items-md-end {
      align-items: flex-end !important;
    }

    .kdn-align-items-md-center {
      align-items: center !important;
    }

    .kdn-align-items-md-baseline {
      align-items: baseline !important;
    }

    .kdn-align-items-md-stretch {
      align-items: stretch !important;
    }

    .kdn-align-content-md-start {
      align-content: flex-start !important;
    }

    .kdn-align-content-md-end {
      align-content: flex-end !important;
    }

    .kdn-align-content-md-center {
      align-content: center !important;
    }

    .kdn-align-content-md-between {
      align-content: space-between !important;
    }

    .kdn-align-content-md-around {
      align-content: space-around !important;
    }

    .kdn-align-content-md-stretch {
      align-content: stretch !important;
    }

    .kdn-align-self-md-auto {
      align-self: auto !important;
    }

    .kdn-align-self-md-start {
      align-self: flex-start !important;
    }

    .kdn-align-self-md-end {
      align-self: flex-end !important;
    }

    .kdn-align-self-md-center {
      align-self: center !important;
    }

    .kdn-align-self-md-baseline {
      align-self: baseline !important;
    }

    .kdn-align-self-md-stretch {
      align-self: stretch !important;
    }

    .kdn-order-md-first {
      -ms-flex-order: -1;
      order: -1;
    }

    .kdn-order-md-1 {
      -ms-flex-order: 1;
      order: 1;
    }

    .kdn-order-md-2 {
      -ms-flex-order: 2;
      order: 2;
    }

    .kdn-order-md-3 {
      -ms-flex-order: 3;
      order: 3;
    }

    .kdn-order-md-4 {
      -ms-flex-order: 4;
      order: 4;
    }

    .kdn-order-md-5 {
      -ms-flex-order: 5;
      order: 5;
    }

    .kdn-order-md-6 {
      -ms-flex-order: 6;
      order: 6;
    }

    .kdn-order-md-7 {
      -ms-flex-order: 7;
      order: 7;
    }

    .kdn-order-md-8 {
      -ms-flex-order: 8;
      order: 8;
    }

    .kdn-order-md-9 {
      -ms-flex-order: 9;
      order: 9;
    }

    .kdn-order-md-10 {
      -ms-flex-order: 10;
      order: 10;
    }

    .kdn-order-md-11 {
      -ms-flex-order: 11;
      order: 11;
    }

    .kdn-order-md-12 {
      -ms-flex-order: 12;
      order: 12;
    }

    .kdn-offset-md-0 {
      margin-left: 0;
    }

    .kdn-offset-md-1 {
      margin-left: 8.333333%;
    }

    .kdn-offset-md-2 {
      margin-left: 16.666667%;
    }

    .kdn-offset-md-3 {
      margin-left: 25%;
    }

    .kdn-offset-md-4 {
      margin-left: 33.333333%;
    }

    .kdn-offset-md-5 {
      margin-left: 41.666667%;
    }

    .kdn-offset-md-6 {
      margin-left: 50%;
    }

    .kdn-offset-md-7 {
      margin-left: 58.333333%;
    }

    .kdn-offset-md-8 {
      margin-left: 66.666667%;
    }

    .kdn-offset-md-9 {
      margin-left: 75%;
    }

    .kdn-offset-md-10 {
      margin-left: 83.333333%;
    }

    .kdn-offset-md-11 {
      margin-left: 91.666667%;
    }
  }

  @media screen and (min-width: @screen-lg-min) {
    .kdn-d-lg-none {
      display: none !important;
    }

    .kdn-d-lg-inline-block {
      display: inline-block !important;
    }

    .kdn-d-lg-block {
      display: block !important;
    }

    .kdn-d-lg-flex {
      display: flex !important;
    }

    .kdn-d-lg-inline-flex {
      display: inline-flex !important;
    }

    .kdn-flex-lg-row {
      flex-direction: row !important;
    }

    .kdn-flex-lg-column {
      flex-direction: column !important;
    }

    .kdn-flex-lg-row-reverse {
      flex-direction: row-reverse !important;
    }

    .kdn-flex-lg-column-reverse {
      flex-direction: column-reverse !important;
    }

    .kdn-flex-lg-wrap {
      flex-wrap: wrap !important;
    }

    .kdn-flex-lg-nowrap {
      flex-wrap: nowrap !important;
    }

    .kdn-flex-lg-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .kdn-justify-content-lg-start {
      justify-content: flex-start !important;
    }

    .kdn-justify-content-lg-end {
      justify-content: flex-end !important;
    }

    .kdn-justify-content-lg-center {
      justify-content: center !important;
    }

    .kdn-justify-content-lg-between {
      justify-content: space-between !important;
    }

    .kdn-justify-content-lg-around {
      justify-content: space-around !important;
    }

    .kdn-align-items-lg-start {
      align-items: flex-start !important;
    }

    .kdn-align-items-lg-end {
      align-items: flex-end !important;
    }

    .kdn-align-items-lg-center {
      align-items: center !important;
    }

    .kdn-align-items-lg-baseline {
      align-items: baseline !important;
    }

    .kdn-align-items-lg-stretch {
      align-items: stretch !important;
    }

    .kdn-align-content-lg-start {
      align-content: flex-start !important;
    }

    .kdn-align-content-lg-end {
      align-content: flex-end !important;
    }

    .kdn-align-content-lg-center {
      align-content: center !important;
    }

    .kdn-align-content-lg-between {
      align-content: space-between !important;
    }

    .kdn-align-content-lg-around {
      align-content: space-around !important;
    }

    .kdn-align-content-lg-stretch {
      align-content: stretch !important;
    }

    .kdn-align-self-lg-auto {
      align-self: auto !important;
    }

    .kdn-align-self-lg-start {
      align-self: flex-start !important;
    }

    .kdn-align-self-lg-end {
      align-self: flex-end !important;
    }

    .kdn-align-self-lg-center {
      align-self: center !important;
    }

    .kdn-align-self-lg-baseline {
      align-self: baseline !important;
    }

    .kdn-align-self-lg-stretch {
      align-self: stretch !important;
    }

    .kdn-order-lg-first {
      -ms-flex-order: -1;
      order: -1;
    }

    .kdn-order-lg-1 {
      -ms-flex-order: 1;
      order: 1;
    }

    .kdn-order-lg-2 {
      -ms-flex-order: 2;
      order: 2;
    }

    .kdn-order-lg-3 {
      -ms-flex-order: 3;
      order: 3;
    }

    .kdn-order-lg-4 {
      -ms-flex-order: 4;
      order: 4;
    }

    .kdn-order-lg-5 {
      -ms-flex-order: 5;
      order: 5;
    }

    .kdn-order-lg-6 {
      -ms-flex-order: 6;
      order: 6;
    }

    .kdn-order-lg-7 {
      -ms-flex-order: 7;
      order: 7;
    }

    .kdn-order-lg-8 {
      -ms-flex-order: 8;
      order: 8;
    }

    .kdn-order-lg-9 {
      -ms-flex-order: 9;
      order: 9;
    }

    .kdn-order-lg-10 {
      -ms-flex-order: 10;
      order: 10;
    }

    .kdn-order-lg-11 {
      -ms-flex-order: 11;
      order: 11;
    }

    .kdn-order-lg-12 {
      -ms-flex-order: 12;
      order: 12;
    }

    .kdn-offset-lg-0 {
      margin-left: 0;
    }

    .kdn-offset-lg-1 {
      margin-left: 8.333333%;
    }

    .kdn-offset-lg-2 {
      margin-left: 16.666667%;
    }

    .kdn-offset-lg-3 {
      margin-left: 25%;
    }

    .kdn-offset-lg-4 {
      margin-left: 33.333333%;
    }

    .kdn-offset-lg-5 {
      margin-left: 41.666667%;
    }

    .kdn-offset-lg-6 {
      margin-left: 50%;
    }

    .kdn-offset-lg-7 {
      margin-left: 58.333333%;
    }

    .kdn-offset-lg-8 {
      margin-left: 66.666667%;
    }

    .kdn-offset-lg-9 {
      margin-left: 75%;
    }

    .kdn-offset-lg-10 {
      margin-left: 83.333333%;
    }

    .kdn-offset-lg-11 {
      margin-left: 91.666667%;
    }
  }

  @media screen and (min-width: @screen-xl-min) {
    .kdn-d-xl-none {
      display: none !important;
    }

    .kdn-d-xl-inline-block {
      display: inline-block !important;
    }

    .kdn-d-xl-block {
      display: block !important;
    }

    .kdn-d-xl-flex {
      display: flex !important;
    }

    .kdn-d-xl-inline-flex {
      display: inline-flex !important;
    }

    .kdn-flex-xl-row {
      flex-direction: row !important;
    }

    .kdn-flex-xl-column {
      flex-direction: column !important;
    }

    .kdn-flex-xl-row-reverse {
      flex-direction: row-reverse !important;
    }

    .kdn-flex-xl-column-reverse {
      flex-direction: column-reverse !important;
    }

    .kdn-flex-xl-wrap {
      flex-wrap: wrap !important;
    }

    .kdn-flex-xl-nowrap {
      flex-wrap: nowrap !important;
    }

    .kdn-flex-xl-wrap-reverse {
      flex-wrap: wrap-reverse !important;
    }

    .kdn-justify-content-xl-start {
      justify-content: flex-start !important;
    }

    .kdn-justify-content-xl-end {
      justify-content: flex-end !important;
    }

    .kdn-justify-content-xl-center {
      justify-content: center !important;
    }

    .justify-content-xl-between {
      justify-content: space-between !important;
    }

    .kdn-justify-content-xl-around {
      justify-content: space-around !important;
    }

    .kdn-align-items-xl-start {
      align-items: flex-start !important;
    }

    .kdn-align-items-xl-end {
      align-items: flex-end !important;
    }

    .kdn-align-items-xl-center {
      align-items: center !important;
    }

    .kdn-align-items-xl-baseline {
      align-items: baseline !important;
    }

    .kdn-align-items-xl-stretch {
      align-items: stretch !important;
    }

    .kdn-align-content-xl-start {
      align-content: flex-start !important;
    }

    .kdn-align-content-xl-end {
      align-content: flex-end !important;
    }

    .kdn-align-content-xl-center {
      align-content: center !important;
    }

    .kdn-align-content-xl-between {
      align-content: space-between !important;
    }

    .kdn-align-content-xl-around {
      align-content: space-around !important;
    }

    .kdn-align-content-xl-stretch {
      align-content: stretch !important;
    }

    .kdn-align-self-xl-auto {
      align-self: auto !important;
    }

    .kdn-align-self-xl-start {
      align-self: flex-start !important;
    }

    .kdn-align-self-xl-end {
      align-self: flex-end !important;
    }

    .kdn-align-self-xl-center {
      align-self: center !important;
    }

    .kdn-align-self-xl-baseline {
      align-self: baseline !important;
    }

    .kdn-align-self-xl-stretch {
      align-self: stretch !important;
    }

    .kdn-order-xl-first {
      -ms-flex-order: -1;
      order: -1;
    }

    .kdn-order-xl-1 {
      -ms-flex-order: 1;
      order: 1;
    }

    .kdn-order-xl-2 {
      -ms-flex-order: 2;
      order: 2;
    }

    .kdn-order-xl-3 {
      -ms-flex-order: 3;
      order: 3;
    }

    .kdn-order-xl-4 {
      -ms-flex-order: 4;
      order: 4;
    }

    .kdn-order-xl-5 {
      -ms-flex-order: 5;
      order: 5;
    }

    .kdn-order-xl-6 {
      -ms-flex-order: 6;
      order: 6;
    }

    .kdn-order-xl-7 {
      -ms-flex-order: 7;
      order: 7;
    }

    .kdn-order-xl-8 {
      -ms-flex-order: 8;
      order: 8;
    }

    .kdn-order-xl-9 {
      -ms-flex-order: 9;
      order: 9;
    }

    .kdn-order-xl-10 {
      -ms-flex-order: 10;
      order: 10;
    }

    .kdn-order-xl-11 {
      -ms-flex-order: 11;
      order: 11;
    }

    .kdn-order-xl-12 {
      -ms-flex-order: 12;
      order: 12;
    }

    .kdn-offset-xl-0 {
      margin-left: 0;
    }

    .kdn-offset-xl-1 {
      margin-left: 8.333333%;
    }

    .kdn-offset-xl-2 {
      margin-left: 16.666667%;
    }

    .kdn-offset-xl-3 {
      margin-left: 25%;
    }

    .kdn-offset-xl-4 {
      margin-left: 33.333333%;
    }

    .kdn-offset-xl-5 {
      margin-left: 41.666667%;
    }

    .kdn-offset-xl-6 {
      margin-left: 50%;
    }

    .kdn-offset-xl-7 {
      margin-left: 58.333333%;
    }

    .kdn-offset-xl-8 {
      margin-left: 66.666667%;
    }

    .kdn-offset-xl-9 {
      margin-left: 75%;
    }

    .kdn-offset-xl-10 {
      margin-left: 83.333333%;
    }

    .kdn-offset-xl-11 {
      margin-left: 91.666667%;
    }
  }
  ```

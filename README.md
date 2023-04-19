# react-tailwind-design-system

컴포넌트 재사용성을 높이고 디자인에 유연하게 대응가능한 시스템

## 구조

```bash
src
├─assets
├─components
│  ├─atoms
│  └─compounds
├─constants
├─hooks
├─pages
│  ├─About
│  ├─Exam
│  └─Home
└─types
```

##

## 코어 컴포넌트 원리

Element.ts에서 className과 as를 각각 상속시켜 유연하게 엘리먼트를 생성.

tailwindcss와 classnames를 조합하여 스타일링 및 반응형에도 대응 및 커스텀 가능.

### 구현

```ts
//src/components/atoms/Element/index.tsx
import {
  createElement,
  ElementType,
  memo,
  PropsWithChildren,
  forwardRef,
  HTMLAttributes,
} from "react";

export type PropsWithAsChildren<
  T extends HTMLAttributes<HTMLElement> = HTMLAttributes<HTMLElement>
> = {
  as?: ElementType;
} & PropsWithChildren<T>;

const Element = forwardRef<HTMLElement, PropsWithAsChildren>(
  ({ as = "div", ...rest }, ref) => {
    return createElement(as, {
      ref,
      ...rest,
    });
  }
);

export default memo(Element);
```

### 호출

```ts
import React, { FC } from "react";
import Element from "@components/atoms/Element";

const Page: FC = () => {
  return (
    <Element as="div" className="bg-red-500">
      Hellow, World!
    </Element>
  );
};

export default Page;
```

# Tailwind CSS Cheat Sheet

## Big Tip
Custom properties can be done through []
Example: w-[240px]

## Layout (Customizable in Tailwind)

| Tailwind | Bootstrap Equivalent | Description |
|----------|----------------------|-------------|
| w-1/2 | col-6 | Splits the div into 2 sections (50% width) |
| w-1/3 | col-4 | 33.33% width |
| w-2/3 | col-8 | 66.66% width |
| w-1/4 | col-3 | 25% width |
| w-3/4 | col-9 | 75% width |
| w-full | w-100 | Width: 100% |
| h-full | h-100 | Height: 100% |
| h-screen | vh-100 | 100% of viewport height |

Tips: h-px = 1px


## Flexbox

| Tailwind | Bootstrap Equivalent | Description |
|----------|----------------------|-------------|
| flex | d-flex | Display: flex |
| flex-col | flex-column | Flex direction: column |
| flex-row | flex-row | Flex direction: row |
| justify-start | justify-content-start | Justify content: flex-start |
| justify-center | justify-content-center | Justify content: center |
| justify-end | justify-content-end | Justify content: flex-end |
| justify-between | justify-content-between | Justify content: space-between |
| items-start | align-items-start | Align items: flex-start |
| items-center | align-items-center | Align items: center |
| items-end | align-items-end | Align items: flex-end |

## Spacing (Customizable in Tailwind)

| Tailwind | Bootstrap Equivalent | Description |
|----------|----------------------|-------------|
| p-0 | p-0 | Padding: 0 |
| p-1 | p-1 | Padding: 0.25rem |
| p-2 | p-2 | Padding: 0.5rem |
| p-4 | p-3 | Padding: 1rem |
| m-0 | m-0 | Margin: 0 |
| m-1 | m-1 | Margin: 0.25rem |
| m-2 | m-2 | Margin: 0.5rem |
| m-4 | m-3 | Margin: 1rem |

Tips: You can do -margin for elements in Tailwind !!

## Typography (Customizable in Tailwind) (Example: "text-3xl")

| Tailwind | Bootstrap Equivalent | Description |
|----------|----------------------|-------------|
| text-xs | fs-6 | Extra small text |
| text-sm | small | Small text |
| text-base | - | Base text size |
| text-lg | fs-5 | Large text |
| text-xl | fs-4 | Extra large text |
| text-2xl | fs-3 | 2x large text |
| font-bold | fw-bold | Bold text |
| font-normal | fw-normal | Normal font weight |
| text-center | text-center | Center-aligned text |

## Borders

| Tailwind | Bootstrap Equivalent | Description |
|----------|----------------------|-------------|
| border | border | Add border on all sides |
| border-t | border-top | Add border to top |
| border-r | border-end | Add border to right |
| border-b | border-bottom | Add border to bottom |
| border-l | border-start | Add border to left |
| border-0 | border-0 | Remove all borders |
| border-2 | border-2 | Border width: 2px |
| border-dashed | - | Dashed border style |
| border-dotted | - | Dotted border style |
| border-gray-300 | border-secondary | Gray border color |

Custom examples: border-[#ff0000], border-[3px], border-b-[5px]
rounded- blabla for border radius

## Images

| Tailwind | Bootstrap Equivalent | Description |
|----------|----------------------|-------------|
| object-cover | object-fit-cover | Makes image cover its container |
| object-contain | object-fit-contain | Contains image within container |
| rounded | rounded | Rounded corners |
| rounded-full | rounded-circle | Circular element |

## Display & Visibility

| Tailwind | Bootstrap Equivalent | Description |
|----------|----------------------|-------------|
| hidden | d-none | Display: none |
| block | d-block | Display: block |
| inline | d-inline | Display: inline |
| inline-block | d-inline-block | Display: inline-block |
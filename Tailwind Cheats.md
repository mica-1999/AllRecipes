# Tailwind CSS Cheat Sheet

## Big Tip
Custom properties can be done through []
Example: w-[240px]

## Quick Reference: Screen Sizes

| Breakpoint | Prefix | Min Width |
|------------|--------|-----------|
| Mobile     | (none) | 0px       |
| Small      | sm:    | 640px     |
| Medium     | md:    | 768px     |
| Large      | lg:    | 1024px    |
| Extra Large| xl:    | 1280px    |
| 2X Large   | 2xl:   | 1536px    |

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

## Visibility in responsiveness 

When using Tailwind it's standard practice to create 2 layouts in case the site needs it for stuff like
grid etc. I can basically hide certain parts of the layout based on what the screen size is.

Examples:
- `hidden md:block` - Hidden on small screens, visible (block) on medium screens and up
- `md:hidden` - Visible on small screens, hidden on medium screens and up
- `lg:flex` - Display as flex only on large screens and up

This dual layout approach differs from Bootstrap's single responsive layout and is more common in Tailwind projects because of its mobile-first design philosophy.

## Responsive Breakpoints

| Prefix | Min Width | Usage Example | Description |
|--------|-----------|---------------|-------------|
| (none) | 0px | `bg-red-500` | Default for all screen sizes (mobile-first) |
| sm: | 640px | `sm:bg-red-500` | Changes background on small screens and up |
| md: | 768px | `md:text-lg` | Larger text for medium screens and up |
| lg: | 1024px | `lg:p-8` | More padding on large screens and up |
| xl: | 1280px | `xl:flex-row` | Row layout for extra-large screens and up |
| 2xl: | 1536px | `2xl:w-1/2` | 50% width only on 2XL screens and up |

**Note:** Tailwind uses a mobile-first approach where unprefixed utilities apply to all screen sizes, while prefixed utilities apply at the specified breakpoint and above.

For custom width or height I use [@800px]
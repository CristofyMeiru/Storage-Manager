import { cva, type VariantProps } from 'class-variance-authority';

export const cardVariants = cva('block rounded-xs border bg-card text-card-foreground w-full p-6', {
  variants: {},
});
export type ZardCardVariants = VariantProps<typeof cardVariants>;

export const cardHeaderVariants = cva('w-full flex flex-col pb-0 gap-1.5', {
  variants: {},
});
export type ZardCardHeaderVariants = VariantProps<typeof cardHeaderVariants>;

export const cardBodyVariants = cva('w-full block mt-6', {
  variants: {},
});
export type ZardCardBodyVariants = VariantProps<typeof cardBodyVariants>;

import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from "contentful";
import type { TypeBlogPostSkeleton } from "./TypeBlogPost";

export interface TypeSoftwareEngineerPortfolioFields {
  name?: EntryFieldTypes.Symbol;
  bio?: EntryFieldTypes.RichText;
  skills?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  projects?: EntryFieldTypes.Array<
    EntryFieldTypes.EntryLink<TypeBlogPostSkeleton>
  >;
  education?: EntryFieldTypes.RichText;
  experience?: EntryFieldTypes.RichText;
  certifications?: EntryFieldTypes.Text;
  contact?: EntryFieldTypes.Object;
}

export type TypeSoftwareEngineerPortfolioSkeleton = EntrySkeletonType<
  TypeSoftwareEngineerPortfolioFields,
  "softwareEngineerPortfolio"
>;
export type TypeSoftwareEngineerPortfolio<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode,
> = Entry<TypeSoftwareEngineerPortfolioSkeleton, Modifiers, Locales>;

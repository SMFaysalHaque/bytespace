import type { Metadata } from "next";
import { Container } from "@/components/shared";
import {
  Pagination,
  SearchCategoryTabs,
  SearchHero,
  SearchResults,
  SearchToolbar,
} from "@/features/search/components";

export const metadata: Metadata = {
  title: "Search",
  description: "Browse and filter courses to find your next learning path on ByteSpace.",
};

export default function SearchPage() {
  return (
    <>
      <SearchHero />
      <section className="bg-white py-10 sm:py-16 lg:py-18">
        <Container className="flex flex-col gap-10 sm:gap-14">
          <div className="flex flex-col gap-6 sm:gap-8">
            <SearchToolbar />
            <SearchCategoryTabs />
          </div>
          <SearchResults />
          <Pagination />
        </Container>
      </section>
    </>
  );
}

import { useMemo, useState } from "preact/hooks";
import type { MarkdownInstance } from "../../types/frontMatter";
type Props = {
  uniqueCategories: string[];
  data: Record<string, MarkdownInstance[]>;
  showTags?: boolean;
};

const BlogsList = ({ data, uniqueCategories, showTags = true }: Props) => {
  const [filter, setFilter] = useState<string>("default");

  const frontMatters = useMemo(() => {
    return data[filter];
  }, [filter]);

  const handleFilterChange = (val: string) => {
    setFilter(val);
  };
  // 444
  return (
    <>
      {showTags ? (
        <section class="mt-6 flex gap-3 flex-wrap">
          <button
            class={`transition text-white text-sm leading-7  px-3 py-0 rounded-full ${
              filter === "default" ? "bg-[#523857]" : "bg-[#807490]"
            }`}
            onClick={() => handleFilterChange("default")}
          >
            Recent
          </button>
          {uniqueCategories.map((category) => {
            return (
              <button
                key={category}
                class={`transition text-white text-sm leading-7  px-3 py-0 rounded-full ${
                  filter === category ? "bg-[#523857]" : "bg-[#807490]"
                }`}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            );
          })}
        </section>
      ) : null}
      <div class="mt-5 border-t border-[#2e2e2e] pt-8 grid gap-10">
        {frontMatters != null &&
          frontMatters.map((post) => (
            <article
              class="flex flex-col lg:flex-row justify-between"
              key={post.url}
            >
              <div class="order-2 lg:order-1">
                <header class="text-2xl leading-8 font-bold">
                  <a href={post.url ?? "#"}>{post.frontmatter.title}</a>
                </header>
                <div id="body" class="mt-3">
                  <p class="text-base text-[#2E2E2E] leading-7">
                    {post.frontmatter.description}
                  </p>
                </div>
                <footer class="mt-4 text-[#2E2E2E] text-sm flex gap-3 items-center">
                  <span class="leading-9">{post.frontmatter.pubDate}</span>
                  {showTags ? (
                    <span class="text-white text-sm leading-7 bg-[#807490] px-4 rounded-full">
                      {post.frontmatter.category}
                    </span>
                  ) : null}
                </footer>
              </div>
              <img
                class="lg:ml-[71px] w-full lg:w-52 h-40 object-cover order-1 lg:order-2 mb-4 lg:mb-0"
                src={post.frontmatter.heroImage}
                alt={post.frontmatter.title}
              />
            </article>
          ))}
      </div>
    </>
  );
};

export default BlogsList;

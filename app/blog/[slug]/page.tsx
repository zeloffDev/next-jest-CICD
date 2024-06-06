type Params = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = ['post-1', 'post-2', 'post-3'];

  return slugs.map((slugs) => ({
    slug: slugs,
  }))
}

export async function generateMetadata({ params }: Params) {
  return { title: `Post: ${params.slug}` };
}

export default function Page({ params }: Params) {
  return <>
      <h1>Slug: {params.slug}</h1>
      <p>cc</p>
      <p>cc2</p>
  </> ;
}

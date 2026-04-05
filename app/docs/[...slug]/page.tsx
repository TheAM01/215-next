export default async function BatchSchedulePage(
    { params }:
    { params: Promise<{ slug: string[] }>}
) {

    const { slug } = await params;

    return (
        <div className="">
            {
                slug.map((s, i) => (
                    <div className="" key={s+i}>{s}</div>
                ))
            }
        </div>
    )
}
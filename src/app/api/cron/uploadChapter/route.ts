export async function GET() {
  const result = await fetch(
    "http://worldtimeapi.org/api/timezone/America/Chicago",
    {
      cache: "no-store",
    },
  );
  const data = await result.json();
  console.log(Response.json({ datetime: data.datetime }));
  return Response.json({ datetime: data.datetime });
}

type Props = {
  params: { id: string };
};

export default async function Page({ params: { id } }: Props) {
  return <h1>Protected Route {id}</h1>;
}

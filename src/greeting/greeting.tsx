type Props = { name?: string };

export const Greeting = ({ name }: Props) => {
  return <h1>{name ? `Hello, ${name}!` : "Hello, Guest!"}</h1>;
};

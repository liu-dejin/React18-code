// type Props = {
//   className: string;
// };
interface Props {
  className: string;
}

const Button = (props: Props) => {
  return <button className={props.className}>this is button</button>;
};

function App() {
  return (
    <>
      <Button className="test" />
    </>
  );
}

export default App;

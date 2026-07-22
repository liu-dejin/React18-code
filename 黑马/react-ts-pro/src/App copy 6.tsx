type Props = {
  onGetMsg?: (msg: string) => void;
};

const Son = (props: Props) => {
  const { onGetMsg } = props;
  const handleGetMsg = () => {
    onGetMsg?.("this is msg");
  };
  return <button onClick={handleGetMsg}>sent Msg</button>;
};
function App() {
  const handleMsg = (msg: string) => {
    console.log(msg);
  };
  return (
    <>
      <Son onGetMsg={(msg) => console.log(msg)} />
      <Son onGetMsg={handleMsg} />
    </>
  );
}

export default App;

interface ButtonProps {
  text: string;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { text, children } = props;
  return (
    <div>
      <button>{text}</button>
      {children}
    </div>
  );
};

function App() {
  return (
    <>
      <Button text="this is button">
        <div style={{ color: "pink", width: 100, height: 100 }}>
          111111111111
        </div>
      </Button>
    </>
  );
}

export default App;

export default function Input({ func, val, name }) {
  const styl = {
    marginBottom: `30px`,
    width: `300px`,
  };
  

  return (
    <>
      <input
        name={name}
        onInput={func}
        value={val}
        type="range"
        min={0}
        max={100}
        style={styl}
      />
    </>
  );
}

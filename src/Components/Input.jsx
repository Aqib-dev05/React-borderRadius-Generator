export default function Input() {
  const styl = {
    marginBottom: `30px`,
  };

  return (
    <>
      <input type="range" min={0} max={100} style={styl} />
    </>
  );
}

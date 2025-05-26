export default function box({ values }) {
  let styleBox = {
    backgroundColor: "orange",
    width: `700px`,
    height: `700px`,
    borderTopLeftRadius: `${values.tl}%`,
    borderTopRightRadius: `${values.tr}%`,
    borderBottomLeftRadius: `${values.bl}%`,
    borderBottomRightRadius: `${values.br}%`,
  };

  return (
    <>
      <div className="box" style={styleBox}></div>
    </>
  );
}

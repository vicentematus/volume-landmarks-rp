function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const VolumeCard = ({ muscle }: any) => {
  const { name, range, bgColor, legend } = muscle;
  let estimatedSets = <p>{range[0]} sets per week</p>;
  // If MIN and MAX of an estimated volume landmark are equal then render just one value.
  if (range[0] != range[1]) {
    estimatedSets = (
      <p>
        {range[0]} - {range[1]} sets per week{" "}
      </p>
    );
  }
  return (
    <>
      <li className="col-span-1 flex shadow-sm rounded-md">
        <div
          className={classNames(
            bgColor,
            "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md"
          )}
        >
          {name}
        </div>
        <div className="flex-1 flex items-center justify-between border-t border-r border-b border-slate-800 rounded-r-md">
          <div className="flex-1 px-4 py-2 text-sm">
            <p className="text-slate-100 font-medium  text-xs">{legend}</p>
            <div className="mt-1 text-slate-200">{estimatedSets}</div>
          </div>
        </div>
      </li>{" "}
    </>
  );
};

export default VolumeCard;

const NavItems = ({ items }) => {
  return (
    <div>
      <ul className="flex items-center gap-2">
        {items.map((item, i) => (
          <li
            key={i}
            className={
              i != items.length - 1
                ? "border-r-[1px] border-white pr-2 cursor-pointer"
                : "cursor-pointer"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavItems;

export default function Continue(prop) {
  console.log("prop", prop);
  console.log("prop.health", prop.health);

  return (
    <div className="">

      {/* code to show non-zero values */}
      <h4 className="main-title">Results</h4>
      {prop.adjust.health === 0 || <p className="title">{prop.adjust.health} Health</p>}
      {prop.adjust.ship === 0 || <p className="title">{prop.adjust.ship} Ship Health</p>}
      {prop.adjust.gold === 0 || <p className="title">{prop.adjust.gold} Gold</p>}

      {/* code to always show values (even 0 values) */}
      {/* <h4 className="main-title">Results</h4>
        <p className="title">{state.outcome.health} Health</p>
        <p className="title">{state.outcome.ship} Ship Health</p>
        <p className="title">{state.outcome.gold} Gold</p> */}

        {/* if value listed above, add divide line */}
      <p
        className={
          prop.adjust.health === 0 && prop.adjust.ship === 0 && prop.adjust.gold === 0
            ? "gap title"
            : "gap title break"
        }
      >
        Ship Health: {prop.health}
      </p>
      <p className="gap title">Player Health: {prop.ship}</p>
      <p className="gap title">Gold: {prop.gold}</p>
      
    </div>
  );
}


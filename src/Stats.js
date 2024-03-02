export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );

  const numItems = item.length;
  const numberPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numberPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything ready to go ✈️"
          : `💼 You have ${numItems} items on your list,and you already picked
        ${numberPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

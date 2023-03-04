import { useTabs } from "../hooks/useTabs.hook";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

function UseTabs() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, idx) => (
        <button onClick={() => changeItem && changeItem(idx)} key={idx}>
          {section.tab}
        </button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}

export default UseTabs;

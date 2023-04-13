const validateItems = (items: NodeListOf<Element>) => {
  if (!items) return;
  items.forEach((e: any) => {
    if (!e.children[0]) return;
    if (document.documentElement.classList.contains("light-theme")) {
      e.children[0].style.color = "black";
    } else {
      e.children[0].style.color = "white";
    }
  });
};
const validateText = (items: NodeListOf<Element>) => {
  if (!items) return;
  items.forEach((e: any) => {
    if (document.documentElement.classList.contains("light-theme")) {
      e.style.color = "black";
    } else {
      e.style.color = "white";
    }
  });
};

export const changeThemeColor = () => {
  const items = window.document.querySelectorAll(".ant-form-item-label");
  validateItems(items);
  const text = window.document.querySelectorAll(".ant-typography");
  validateText(text);
};

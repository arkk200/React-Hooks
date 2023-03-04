export const useConfirm = (
  message = "",
  onConfirm: () => any,
  onCancel: () => any
) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };
  return confirmAction;
};

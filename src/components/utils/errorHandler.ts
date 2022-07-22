export const errorHandler = (err: unknown) => {
  let message;
  if (err instanceof Error) message = err.message;
  else message = String(err);

  alert(message);
};

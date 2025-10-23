export const findByColumn = async <
  M extends { findUnique: (args: any) => Promise<any> },
  TSelect extends Record<string, boolean> = any
>(
  model: M,
  value: any,
  select?: TSelect,
  column: string = "id"
) => {
  return await model.findUnique({
    where: { [column]: value },
    ...(select ? { select } : {}),
  });
};

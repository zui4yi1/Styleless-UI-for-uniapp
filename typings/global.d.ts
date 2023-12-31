type IDict = {
  label: string;
  value: any;
  children?: IDict[];
}[];

type IDicts = {
  [k: string]: IDict;
};

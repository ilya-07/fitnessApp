export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  Contact = "contact",
}
export interface IBenefit {
  icon: JSX.Element;
  title: string;
  text: string;
}
export interface IClass {
  name: string;
  text?: string;
  image: string;
}

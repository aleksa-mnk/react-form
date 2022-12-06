type Errors = {
  imgSrc: null;
  date: null;
  name: null;
  lastName: null;
  country: null;
  roles: null;
  accepted: null;
};

export type AddCardArr = {
  [key: string]: NewCardComponentProps;
};

export type NewCardComponentProps = {
  id: string;
  imgSrc: string;
  date: string;
  name: string;
  country: string;
  roles: string;
  male: boolean;
  female: boolean;
  accepted: boolean;
};

export type CardComponentProps = {
  name: string;
  birthday: string;
  location: string;
  image: string;
  voice: string;
  id: number;
};

export type FormCardComponentProps = {
  cardData: NewCardComponentProps;
};

export type SearchString = {
  value: string;
};

export type NameFieldsComponent = {
  errors: Errors;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string | undefined,
    param: string
  ) => void;
  nameInputRef: React.RefObject<HTMLInputElement>;
};

export type VoicerSelectComponent = {
  countryInputRef: React.RefObject<HTMLSelectElement>;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLSelectElement>,
    value: string | undefined,
    param: string
  ) => void;
  errors: Errors;
};

export type DateFieldComponent = {
  errors: Errors;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
    param: string
  ) => void;
  dateInputRef: React.RefObject<HTMLInputElement>;
};

export type ErrorStatus = {
  [key: string]: null | string;
};

export type SkillFieldsComponent = {
  errors: Errors;
  maleInputRef: React.RefObject<HTMLInputElement>;
  femaleInputRef: React.RefObject<HTMLInputElement>;
  femaleChecked: boolean;
  maleChecked: boolean;
  onRoleChange: () => void;
};

export type FormComponent = {
  addCard: (data: NewCardComponentProps) => void;
};

export type SwitcherComponent = {
  acceptedInputRef: React.RefObject<HTMLInputElement>;
  errors: Errors;
  checked: boolean;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: boolean,
    param: string
  ) => void;
};

export type ImageFieldComponent = {
  fileInputRef: React.RefObject<HTMLInputElement>;
  errors: Errors;
  onChangeHandler: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string,
    param: string
  ) => void;
};

export interface State {
  cardsData: NewCardComponentProps[];
}

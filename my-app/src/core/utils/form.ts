export const getFormDefaultState = () => {
  return {
    currentCard: {
      id: '',
      imgSrc: '',
      date: '',
      name: '',
      lastName: '',
      country: '',
      roles: '',
      male: false,
      female: false,
      accepted: false,
    },
    errors: {
      imgSrc: null,
      date: null,
      name: null,
      lastName: null,
      country: null,
      roles: null,
      accepted: null,
    },
    isDisabled: true,
    hasError: true,
  };
};
